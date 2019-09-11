import { configure, addParameters, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import lightTheme from './lightTheme';

addDecorator(withInfo);

addParameters({
  options: {
    theme: lightTheme,
  },
});

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
