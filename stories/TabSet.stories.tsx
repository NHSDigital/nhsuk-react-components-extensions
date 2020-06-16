import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import { TabSet } from '../src';

const stories = storiesOf('TabSet', module);

stories
  .add('Standard', () => (
    <>
      <TabSet>
        <TabSet.Tab>Overview</TabSet.Tab>
        <TabSet.Tab active>Demographics</TabSet.Tab>
        <TabSet.Tab>Clinicals</TabSet.Tab>
        <TabSet.Tab>Documents</TabSet.Tab>
      </TabSet>
      <br />
    </>
  ))
  .add('With Disabled Tab', () => (
    <>
      <TabSet>
        <TabSet.Tab>Overview</TabSet.Tab>
        <TabSet.Tab active>Demographics</TabSet.Tab>
        <TabSet.Tab disabled>Clinicals</TabSet.Tab>
        <TabSet.Tab>Documents</TabSet.Tab>
      </TabSet>
      <br />
    </>
  ))
  .add('With Empty Tab', () => (
    <>
      <TabSet>
        <TabSet.Tab>Overview</TabSet.Tab>
        <TabSet.Tab active>Demographics</TabSet.Tab>
        <TabSet.Tab empty>Clinicals</TabSet.Tab>
        <TabSet.Tab>Documents</TabSet.Tab>
      </TabSet>
      <br />
    </>
  ))
  .add('With Different Sizes', () => (
    <>
      <TabSet>
        <TabSet.Tab style={{ maxWidth: 200 }}>Overview</TabSet.Tab>
        <TabSet.Tab style={{ minWidth: 450 }}>Demographics</TabSet.Tab>
        <TabSet.Tab style={{ flexGrow: 2 }}>Clinicals</TabSet.Tab>
        <TabSet.Tab style={{ flexGrow: 0.5 }}>Documents</TabSet.Tab>
        <TabSet.Tab>Settings</TabSet.Tab>
      </TabSet>
      <br />
    </>
  ));
