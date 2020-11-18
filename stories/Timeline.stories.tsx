/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Timeline } from '../src';

const stories = storiesOf('Timeline', module);

stories
  .add('Standard', () => (
    <Timeline className="timeline-demo">
      
    </Timeline>
  ));
