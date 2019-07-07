import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Tabs, Tab } from '../components/Tabs';

const TabsExample = () => {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <Tabs activeTab={tab}>
        <Tab onClick={() => setTab(0)} tab={0}>
          Tab 1
        </Tab>
        <Tab onClick={() => setTab(1)} tab={1}>
          Tab 2
        </Tab>
        <Tab onClick={() => setTab(2)} tab={2}>
          Tab 3 Long Boi
        </Tab>
      </Tabs>

      <p>The currently active tab is tab {tab}</p>
    </div>
  );
};

storiesOf('Tabs', module).add('basic tabs', () => <TabsExample />);
