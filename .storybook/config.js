import React from 'react';
import { configure, addParameters, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import 'storybook-chromatic';

import onlineTheme from './onlineTheme';
import { GlobalStyle } from '../src/common/global';

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
    storySort: (a, b) => (a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, { numeric: true })),
  },
});

configure([require.context('../src', true, /\.stories\.(tsx|mdx?)$/)], module);
