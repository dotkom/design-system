import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#0D5474',
  colorSecondary: '#316e89',

  // UI
  appBg: '#0D5474',
  appContentBg: '#FFFFFF',

  // appBorderColor: '#0D5474',
  appBorderRadius: 3,

  // Typography
  fontBase: '"Source Sans Pro", sans-serif',
  fontCode: '"Source Code Pro", monospace',

  // Text colors
  //textColor: 'black',
  //textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#808080',
  barSelectedColor: '#F9B759',
  barBg: '#072e40',

  //// Form colors
  //inputBg: 'white',
  //inputBorder: 'silver',
  //inputTextColor: 'black',
  //inputBorderRadius: 4,

  brandTitle: 'dotKoms storybook',
  brandUrl: 'https://online.ntnu.no',
  brandImage: 'https://online.ntnu.no/static/img/online_logo.svg',
});
