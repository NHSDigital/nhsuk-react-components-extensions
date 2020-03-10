/* eslint-disable no-console, import/no-extraneous-dependencies */

const axios = require('axios');
const fs = require('fs');
const path = require('path');
const Git = require('nodegit');
/**
 * Extended Error with different name to differentiate
 * from network errors originating from Axios
 */
class PackageAlreadyExistsError extends Error {
  constructor(message) {
    super(message);
    this.name = 'PackageAlreadyExistsError';
  }
}

/**
 * Make a request to the NPM registry and get
 * the current latest version.
 */
const getPublishedPackageVersion = async (packageVersion = 'latest') => {
  const response = await axios.get(
    `https://registry.npmjs.org/nhsuk-react-components-extensions/${packageVersion}`,
  );
  const [major, minor, patch] = response.data.version.split('.');
  return {
    major: Number(major),
    minor: Number(minor),
    patch: Number(patch),
    version: response.data.version,
  };
};

/**
 * Request the new version from NPM registry. As it should
 * not be published yet, we're expecting a 404.
 */
const ensurePackageNotAlreadyPublished = async packageVersion => {
  try {
    // We don't care about the response here, only that it
    // responds with a status of 200.
    await axios.get(
      `https://registry.npmjs.org/nhsuk-react-components-extensions/${packageVersion}`,
    );
    throw new PackageAlreadyExistsError(
      `Package version "${packageVersion}" is already available on the NPM registry`,
    );
  } catch (err) {
    if (err.response && err.response.status === 404) {
      return;
    }
    throw err;
  }
};

/**
 * Load and parse the local package.json to check the local version
 */
const getLocalPackageVersion = () => {
  const rawPackage = fs.readFileSync(path.join(__dirname, '../package.json'));
  const package = JSON.parse(rawPackage);
  const [major, minor, patch] = package.version.split('.');
  console.log({
    major: Number(major),
    minor: Number(minor),
    patch: Number(patch),
    version: package.version,
  });
  return {
    major: Number(major),
    minor: Number(minor),
    patch: Number(patch),
    version: package.version,
  };
};

/**
 * Bumps the patch version and ensures that the new package version hasn't been
 * already published. If it has, throw an error, as this should not happen when
 * the working branch is up to date with master.
 *
 * @param latestVersion - Latest Version object (i.e. {major: 1, minor: 0...})
 */
const getNextPatchVersion = async latestVersion => {
  const { major, minor, patch } = latestVersion;
  const suggestedVersion = `${major}.${minor}.${patch + 1}`;
  try {
    await ensurePackageNotAlreadyPublished(suggestedVersion);
    return {
      major,
      minor,
      patch: patch + 1,
      version: suggestedVersion,
    };
  } catch (err) {
    if (err.name === 'PackageAlreadyExistsError') {
      throw new PackageAlreadyExistsError(
        // eslint-disable-next-line max-len
        'Bumped package version already exists on the npm registry. Is your branch up to date with master?',
      );
    }
    throw err;
  }
};

const commitNewVersionToGit = async version => {
  if (process.env.GITHUB_ACTIONS !== true) {
    console.log('Not committing new version to Git: Not running in Github Actions');
  } else {
    const repo = await Git.Repository.open(path.join(__dirname, '../.git'));

    const index = await repo.refreshIndex();
    await index.addByPath('package.json');

    const oid = await index.writeTree();

    const head = await Git.Reference.nameToId(repo, 'HEAD');
    const parentCommit = await repo.getCommit(head);

    const signature = Git.Signature.now('Continuous Deployment Action', 'ci-action@github.com');

    const commit = await repo.createCommit(
      'HEAD',
      signature,
      signature,
      `Bump verson to ${version}`,
      oid,
      [parentCommit],
    );
    console.log('New Commit: ', commit.tostrS());
    const remote = await repo.getRemote('origin');
    console.log('Pushing to remote...');
    await remote.push(['refs/heads/master:refs/heads/master'], {
      callbacks: {
        credentials(url, userName) {
          return Git.Cred.sshKeyFromAgent(userName);
        },
      },
    });
  }
};

const bumpPackageJsonVersion = version => {
  const rawPackage = fs.readFileSync(path.join(__dirname, '../package.json'));
  const package = JSON.parse(rawPackage);
  package.version = version;
  fs.writeFileSync(path.join(__dirname, '../package.json'), JSON.stringify(package, null, 2));
};

const main = async () => {
  const latestVersion = await getPublishedPackageVersion();
  const localVersion = getLocalPackageVersion();

  if (latestVersion.version !== localVersion.version) {
    await ensurePackageNotAlreadyPublished(localVersion.version);
    console.log(
      'No package version changes required: local version (',
      localVersion.version,
      ') not on npm registry.',
    );
    console.log(`Next Package Version: ${localVersion.version}`);
  } else {
    const nextVersion = await getNextPatchVersion(latestVersion);
    bumpPackageJsonVersion(nextVersion.version);
    console.log(
      `Package Version Bumped from "${localVersion.version}" to "${nextVersion.version}"`,
    );
    console.log(`Next Package Version: ${nextVersion.version}`);
    await commitNewVersionToGit(nextVersion.version);
  }
};

if (require.main === module) {
  try {
    main();
  } catch (err) {
    console.error('Automated Package Deployment Failed.');
    throw err;
  }
}
