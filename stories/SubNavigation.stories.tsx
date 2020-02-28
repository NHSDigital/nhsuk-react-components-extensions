import React from 'react';
import { storiesOf } from '@storybook/react';
import { SubNavigation } from '../src';

const stories = storiesOf('Sub Navigation Panel', module);

stories.add('Standard', () => (
  <SubNavigation>
    <SubNavigation.Item text="Hello world" target="#" active></SubNavigation.Item>
    <SubNavigation.Item text="Hello world" target="#"></SubNavigation.Item>
    <SubNavigation.Item text="Hello world" target="#"></SubNavigation.Item>
  </SubNavigation>
));
