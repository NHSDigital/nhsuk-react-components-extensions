import React from 'react';
import { storiesOf } from '@storybook/react';
import { SubNavigation } from '../src';

const stories = storiesOf('Sub Navigation Panel', module);

stories.add('Standard', () => (
  <SubNavigation>
    <SubNavigation.Item href="#" aria-current="page">Active Tab</SubNavigation.Item>
    <SubNavigation.Item href="#">Tab 2</SubNavigation.Item>
    <SubNavigation.Item href="#">Tab 3</SubNavigation.Item>
  </SubNavigation>
));
