import React from 'react';
import { storiesOf } from '@storybook/react';
import { SubNavigation } from '../src';

const stories = storiesOf('Sub Navigation Panel', module);

stories.add('Standard', () => {
  const [activeTab, setActiveTab] = React.useState(1);
  return (
    <SubNavigation>
      <SubNavigation.Item
        aria-current={(activeTab === 1) ? 'page' : false}
        onClick={() => setActiveTab(1)}
      >
        Tab 1
      </SubNavigation.Item>
      <SubNavigation.Item
        aria-current={(activeTab === 2) ? 'page' : false}
        onClick={() => setActiveTab(2)}
      >
        Tab 2
      </SubNavigation.Item>
      <SubNavigation.Item
        aria-current={(activeTab === 3) ? 'page' : false}
        onClick={() => setActiveTab(3)}
      >
        Tab 3
      </SubNavigation.Item>
    </SubNavigation>
  );
});
