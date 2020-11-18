/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Timeline } from '../src';

const stories = storiesOf('Timeline', module);

const storybookEvents = [
  {
    title: "Result sent",
    instigator: "System",
    date: new Date(),
    description: [
      "Test Result: (39S) Low-grade dyskaryosis, HPV positive, Repeat Advised",
      "Test Date: 19-Oct-2020, 9:00:00 am"
    ]
  },
  {
    title: "Patient deferred",
    instigator: "James Smith",
    date: new Date(),
    description: [
      "Defer Reason: Pregnancy",
      "CRM Case Number: CAS-12345-ABCDE",
      "Comments: Requested via the GP form"
    ]
  }
]

stories
  .add('Standard', () => (
    <Timeline events={storybookEvents}></Timeline>
  ));
