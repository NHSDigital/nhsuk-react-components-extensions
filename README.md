# NHS.UK React Components Extensions

Extensions to the NHS.UK React Components Library

## Usage

### Installation

The `nhsuk-react-components-extensions` package is published on NPM, and is installable via:

```bash
yarn add nhsuk-react-components-extensions

# Or

npm i --save nhsuk-react-components-extensions
```

### Importing Components

Components can either be imported from the global package or from the `/lib` directory. The package is tree-shakeable, so you should not see a sizeable difference between the import sizes using either method.

```jsx
// From the global package
import { SubNavigation } from 'nhsuk-react-components-extensions';

// From the lib directory
import SubNavigation from 'nhsuk-react-components/lib/components/sub-navigation';
```

### Styles

The package comes with two separate "master" stylesheets. These can be found at `~nhsuk-react-components-extensions/css/all.css` and `~nhsuk-react-components-extensions/css/components.css`.

If you are already using components from `nhsuk-frontend` or the `nhsuk-react-components` packages, it is strongly recommended to use the `components.css` file as this only contains the additional styles required to use the extra components in this library.

If you are not using any of those other packages, or the standard NHS.UK stylesheets, you will require the `all.css` file as this contains all of the core NHS.UK styles as well as the component styles.

```scss
// Core NHS.UK Styles and Components
@import '~nhsuk-react-components-extensions/css/all.css';

// Just Components
@import '~nhsuk-react-components-extensions/css/components.css';
```

## Storybook

A storybook containing all of the components and their usage can be found [here](https://nhsdigital.github.io/nhsuk-react-components-extensions).

## Maintainers

**We're currently looking for new maintainers!** If you have knowledge of React and would be willing to help maintain 
this library, you can email me (Thomas Judd-Cooper) [here](mailto:thomas.judd-cooper1@nhs.net).

If you are thinking about raising a pull request, please read the [Contributing Guide](CONTRIBUTING.md).

- Thomas Judd-Cooper ([GitHub](https://github.com/tomdango))
- Luke Pearson ([GitHub](https://github.com/lukepearson))
