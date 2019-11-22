import { darken, lighten } from './blender';

const primary = '#0D5474';
const secondary = '#F9B759';
const white = '#FFFFFF';
const gray = '#808080';
const black = '#000000';
const info = '#0A94C2';
const success = '#09AA09';
const warning = '#FFC000';
const error = '#DF2020';

export const colors = {
  primaryLighten45: lighten(primary, 0.45),
  primaryLighten30: lighten(primary, 0.3),
  primaryLighten15: lighten(primary, 0.15),
  primary: primary,
  primaryDarken15: darken(primary, 0.15),
  primaryDarken30: darken(primary, 0.3),
  primaryDarken45: darken(primary, 0.45),

  secondaryLighten45: lighten(secondary, 0.45),
  secondaryLighten30: lighten(secondary, 0.3),
  secondaryLighten15: lighten(secondary, 0.15),
  secondary: secondary,
  secondaryDarken15: darken(secondary, 0.15),
  secondaryDarken30: darken(secondary, 0.3),
  secondaryDarken45: darken(secondary, 0.45),

  white: white,
  grayLighten90: lighten(gray, 0.9),
  grayLighten60: lighten(gray, 0.6),
  grayLighten30: lighten(gray, 0.3),
  gray: gray,
  grayDarken30: darken(gray, 0.3),
  grayDarken60: darken(gray, 0.6),
  grayDarken90: darken(gray, 0.9),
  black: black,

  infoLighten90: lighten(info, 0.9),
  infoLighten45: lighten(info, 0.45),
  info: info,
  infoDarken35: darken(info, 0.35),
  infoDarken70: darken(info, 0.7),

  successLighten90: lighten(success, 0.9),
  successLighten45: lighten(success, 0.45),
  success: success,
  successDarken35: darken(success, 0.35),
  successDarken70: darken(success, 0.7),

  warningLighten90: lighten(warning, 0.9),
  warningLighten45: lighten(warning, 0.45),
  warning: warning,
  warningDarken35: darken(warning, 0.35),
  warningDarken70: darken(warning, 0.7),

  errorLighten90: lighten(error, 0.9),
  errorLighten45: lighten(error, 0.45),
  error: error,
  errorDarken35: darken(error, 0.35),
  errorDarken70: darken(error, 0.7),

  eventsBedpres: '#eb536e',
  eventsKurs: '#127dbd',
  eventsSosialt: '#43b171',
  eventsUtflukt: '#fdbd47',
  eventsEkskursjon: '#2ac6f9',
  eventsKjelleren: '#e75e3b',
  eventsInternt: '#e75e3b',
  eventsAnnet: '#b36bcd',

  officialBlue: '#0D5474',
  officialOrange: '#F9B759',
};

export type ColorName = keyof typeof colors;
