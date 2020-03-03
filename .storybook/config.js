import { configure, addParameters } from '@storybook/react';
import '../src/nhsukrc-ext-full.scss';
import NHSTheme from './theme';

addParameters({
  options: {
    theme: NHSTheme,
  },
});

configure(require.context('../stories', true, /\.stories\.tsx$/), module);
