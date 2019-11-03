import { pSBC } from './psbc';

const primary = '#0060A3';
const secondary = '#FAA21B';
const gray = '#808080';
const info = '#0A94C2';
const success = '#09AA09';
const warning = '#FFC000';
const error = '#DF2020';

export const colors = {
  primaryLighten45: pSBC(0.45, primary),
  primaryLighten30: pSBC(0.3, primary),
  primaryLighten15: pSBC(0.15, primary),
  primary: primary,
  primaryDarken15: pSBC(-0.15, primary),
  primaryDarken30: pSBC(-0.3, primary),
  primaryDarken45: pSBC(-0.45, primary),

  secondaryLighten45: pSBC(0.45, secondary),
  secondaryLighten30: pSBC(0.3, secondary),
  secondaryLighten15: pSBC(0.15, secondary),
  secondary: secondary,
  secondaryDarken15: pSBC(-0.15, secondary),
  secondaryDarken30: pSBC(-0.3, secondary),
  secondaryDarken45: pSBC(-0.45, secondary),

  white: pSBC(1, gray),
  grayLighten90: pSBC(0.9, gray),
  grayLighten60: pSBC(0.6, gray),
  grayLighten30: pSBC(0.3, gray),
  gray: gray,
  grayDarken30: pSBC(-0.3, gray),
  grayDarken60: pSBC(-0.6, gray),
  grayDarken90: pSBC(-0.9, gray),
  black: pSBC(-1, gray),

  infoLighten90: pSBC(0.9, info),
  infoLighten45: pSBC(0.45, info),
  info: info,
  infoDarken35: pSBC(-0.35, info),
  infoDarken70: pSBC(-0.7, info),

  successLighten90: pSBC(0.9, success),
  successLighten45: pSBC(0.45, success),
  success: success,
  successDarken35: pSBC(-0.35, success),
  successDarken70: pSBC(-0.7, success),

  warningLighten90: pSBC(0.9, warning),
  warningLighten45: pSBC(0.45, warning),
  warning: warning,
  warningDarken35: pSBC(-0.35, warning),
  warningDarken70: pSBC(-0.7, warning),

  errorLighten90: pSBC(0.9, error),
  errorLighten45: pSBC(0.45, error),
  error: error,
  errorDarken35: pSBC(-0.35, error),
  errorDarken70: pSBC(-0.7, error),

  eventsBedpres: '#eb536e',
  eventsKurs: '#127dbd',
  eventsSosialt: '#43b171',
  eventsUtflukt: '#fdbd47',
  eventsEkskursjon: '#2ac6f9',
  eventsKjelleren: '#e75e3b',
  eventsInternt: '#e75e3b',
  eventsAnnet: '#b36bcd',

  officialBlue: '#0060A3',
  officialOrange: '#FAA21B',
};
