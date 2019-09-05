import { configure, addParameters } from '@storybook/react';
import lightTheme from './lightTheme';

addParameters({
  options: {
    theme: lightTheme,
  },
});

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
