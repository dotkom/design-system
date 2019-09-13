import React from 'react';
import { action } from '@storybook/addon-actions';

import ExampleBox from './ExampleBox';

export default {
  title: 'Design System|Example Box',
  component: ExampleBox,
};

export const test = () => <ExampleBox onClick={action('clicked')} />;

test.story = {
  name: 'this is a test component',
};
