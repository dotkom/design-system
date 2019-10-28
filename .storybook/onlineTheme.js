import { create } from '@storybook/theming';

const baseTheme = {
  colorPrimary: '#FF4785',
  colorSecondary: '#1EA7FD',

  // UI
  appBg: '#004170',
  appContentBg: 'var(--bg)',
  //appBorderColor: '#faa21b',
  appBorderColor: 'rgba(255,255,255,.1)',
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
  /*
  // UI
  appBg: '#2f2f2f',
  appContentBg: '#333',
  appBorderColor: 'rgba(255,255,255,.1)',
  appBorderRadius: 4,

  // Fonts
  fontBase: typography.fonts.base,
  fontCode: typography.fonts.mono,

  // Text colors
  textColor: color.lightest,
  textInverseColor: color.darkest,

  // Toolbar default and active colors
  barTextColor: '#999999',
  barSelectedColor: color.secondary,
  barBg: color.darkest,

  // Form colors
  inputBg: '#3f3f3f',
  inputBorder: 'rgba(0,0,0,.3)',
  inputTextColor: color.lightest,
  inputBorderRadius: 4,
  */
}

export const themes = {
  light: {
    base: 'light', ...baseTheme
  },
  dark: {
    base: 'dark', ...baseTheme
  }
}

export default create(themes.dark);
