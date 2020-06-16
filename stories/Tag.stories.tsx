import React from 'react';
import { storiesOf } from '@storybook/react';
import { Tag } from '../src';

const stories = storiesOf('Tags', module);

stories
  .add('Basic', () => (
    <div className="tag-demo">
      <Tag>Standard</Tag>
      <Tag>Done</Tag>
      <Tag color="white">Started</Tag>
      <Tag color="grey">Not Started</Tag>
      <Tag color="blue">Ready to submit</Tag>
      <Tag color="red">FP69</Tag>
      <Tag color="orange">Ceased - no cervix</Tag>
    </div>
  ))
  .add('Colours', () => (
    <div className="tag-demo">
      <Tag>Standard</Tag>
      <Tag color="white">Started</Tag>
      <Tag color="grey">Not Started</Tag>
      <Tag color="green">New</Tag>
      <Tag color="aqua-green">Active</Tag>
      <Tag color="blue">Pending</Tag>
      <Tag color="purple">Received</Tag>
      <Tag color="pink">Sent</Tag>
      <Tag color="red">Rejected</Tag>
      <Tag color="orange">Declined</Tag>
      <Tag color="yellow">Delayed</Tag>
    </div>
  ));
