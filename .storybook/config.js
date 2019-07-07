import { configure, addDecorator } from '@storybook/react';
import { globalStylesDecorator } from '../src/global';

function loadStories() {
  require('../src/stories');
}

addDecorator(globalStylesDecorator);

configure(loadStories, module);
