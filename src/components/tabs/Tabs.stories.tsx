import React from 'react';
import Tabs from './Tabs';
import Tab from './Tab';

export default {
  title: 'Design System|Tabs',
  component: Tabs,
};

export const all = () => (
  <>
    <Tabs>
      <Tab title="Tab 1">Contents of Tab 1.</Tab>

      <Tab title="Tab 2">Contents of Tab 2.</Tab>
    </Tabs>
  </>
);
