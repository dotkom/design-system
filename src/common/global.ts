import { createGlobalStyle } from 'styled-components';
import Reset from './reset';

export const GlobalStyle = createGlobalStyle`
  ${Reset}
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700|Source+Code+Pro|Material+Icons+Outlined');

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
`;
