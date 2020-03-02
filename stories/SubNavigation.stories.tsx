import React from 'react';
import { storiesOf } from '@storybook/react';
import { SubNavigation } from '../src';

const stories = storiesOf('Sub Navigation Panel', module);

stories.add('Standard', () => (
  <SubNavigation>
    <SubNavigation.Item href="#" aria-current="page">Hello World</SubNavigation.Item>
    <SubNavigation.Item href="#">Hello World</SubNavigation.Item>
    <SubNavigation.Item href="#">Hello World</SubNavigation.Item>
  </SubNavigation>
));
