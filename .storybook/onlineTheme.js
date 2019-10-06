import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: 'hotpink',
  colorSecondary: '#d60',

  // UI
  appBg: '#004170',
  appContentBg: '#fff',
  //appBorderColor: '#faa21b',
  appBorderRadius: 5,

  // Typography
  fontBase: '"Open Sans Pro", sans-serif',
  fontCode: 'monospace',

  // Text colors
  //textColor: 'black',
  //textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#999',
  barSelectedColor: '#d60',
  barBg: '#333',

  //// Form colors
  //inputBg: 'white',
  //inputBorder: 'silver',
  //inputTextColor: 'black',
  //inputBorderRadius: 4,

  brandTitle: 'dotKoms storybook',
  brandUrl: 'https://online.ntnu.no',
  brandImage: 'https://online.ntnu.no/static/img/online_logo.svg',
});
