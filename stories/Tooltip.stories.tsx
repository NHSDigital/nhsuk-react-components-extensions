import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import { Tooltip, WarningIcon } from '../src';

const stories = storiesOf('Tooltip', module);

stories
  .add('Standard', () => (
    <div className="tooltip-demo">
      <Tooltip tooltip="Hello!">
        <div>Hover Over Me!</div>
      </Tooltip>
    </div>
  ))
  .add('With an Icon', () => (
    <div className="tooltip-demo">
      <Tooltip tooltip="Data Quality Issues">
        <WarningIcon />
      </Tooltip>
    </div>
  ));
