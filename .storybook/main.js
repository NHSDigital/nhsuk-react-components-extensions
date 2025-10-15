// .storybook/main.js
const path = require('path');
const fs = require('fs');

function nhsAssetsDir() {
  // Find the installed package root
  const pkgDir = path.dirname(require.resolve('nhsuk-frontend/package.json'));
  // Try common locations across versions
  const candidates = [
    path.join(pkgDir, 'assets'),
    path.join(pkgDir, 'dist', 'assets'),
    path.join(pkgDir, 'packages', 'assets'),
  ];
  return candidates.find(fs.existsSync) || null;
}

const assets = nhsAssetsDir();

module.exports = {
  framework: { name: '@storybook/react-vite', options: {} },
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: [],
  staticDirs: assets ? [{ from: assets, to: '/assets' }] : [],
  typescript: { reactDocgen: 'react-docgen-typescript' },
};
