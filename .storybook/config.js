import { configure, addParameters } from '@storybook/react';
import '../src/all.scss';
import NHSTheme from './theme';

addParameters({
  options: {
    theme: NHSTheme,
  },
});

configure(require.context('../stories', true, /\.stories\.tsx$/), module);
