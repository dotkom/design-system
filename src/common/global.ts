import { createGlobalStyle } from 'styled-components';
import Reset from './reset';

export const GlobalStyle = createGlobalStyle`
  ${Reset}
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700|Source+Code+Pro');
  @import url('https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp');

  body {
    font-family: 'Source Sans Pro', sans-serif;
  }
  h1, h2, h3 {
    font-family: 'Source Code Pro', monospace;
    margin: 2rem 0 1rem;
  }
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  .md-18 { font-size: 18px; }
  .md-24 { font-size: 24px; }
  .md-36 { font-size: 36px; }
  .md-48 { font-size: 48px; }
`;
