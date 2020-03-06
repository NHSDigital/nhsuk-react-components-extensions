import { storiesOf } from '@storybook/react';
import React from 'react';
import { TabSet } from '../src';

storiesOf('TabSet', module);

const stories = storiesOf('Page Tab Panel', module);

stories
  .add('Standard', () => (
    <div>
      <TabSet>
        <TabSet.Tab id="overview-tab">Overview</TabSet.Tab>

        <TabSet.Tab isActive>Demographics</TabSet.Tab>

        <TabSet.Tab isActive={false}>Clinicals</TabSet.Tab>

        <TabSet.Tab>Documents</TabSet.Tab>
      </TabSet>
      <div style={{ height: '15px' }} />
    </div>
  ))
  .add('With Disabled Tab', () => (
    <div>
      <TabSet>
        <TabSet.Tab>Overview</TabSet.Tab>

        <TabSet.Tab isActive>Demographics</TabSet.Tab>

        <TabSet.Tab isDisabled>Clinicals</TabSet.Tab>

        <TabSet.Tab>Documents</TabSet.Tab>
      </TabSet>
      <div style={{ height: '15px' }} />
    </div>
  ))
  .add('With Empty Tab', () => (
    <div>
      <TabSet>
        <TabSet.Tab>Overview</TabSet.Tab>

        <TabSet.Tab isActive>Demographics</TabSet.Tab>

        <TabSet.Tab isEmpty>Clinicals</TabSet.Tab>

        <TabSet.Tab>Documents</TabSet.Tab>
      </TabSet>
      <div style={{ height: '15px' }} />
    </div>
  ))
  .add('With Tab auto-sizing', () => (
    <div>
      <TabSet>
        <TabSet.Tab>Overview</TabSet.Tab>

        <TabSet.Tab isActive autosize>
          Demographics
        </TabSet.Tab>

        <TabSet.Tab autosize>Clinicals</TabSet.Tab>

        <TabSet.Tab>Documents</TabSet.Tab>
      </TabSet>
      <div style={{ height: '15px' }} />
    </div>
  ));
