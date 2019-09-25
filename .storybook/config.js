import React from 'react';
import { configure, addParameters, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import 'storybook-chromatic';

import onlineTheme from './onlineTheme';
import { GlobalStyle } from '../src/components/shared/global';

addDecorator(withA11y);
addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

addParameters({
  options: {
    theme: onlineTheme,
  },
});

configure([require.context('../src', true, /\.stories\.(tsx|mdx?)$/)], module);
