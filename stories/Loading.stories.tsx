import React from 'react';
import { storiesOf } from '@storybook/react';
import { Loading } from '../src';

const stories = storiesOf('Loading spinner', module);

stories
  .add('Basic', () => (
    <Loading />
  ))
  .add('With custom text', () => (
    <Loading text="Loading patients" />
  ))
  .add('Without text', () => (
    <Loading text={false} />
  ));
