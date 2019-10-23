import { createGlobalStyle } from 'styled-components';
import Reset from './reset';

export const GlobalStyle = createGlobalStyle`
  ${Reset}
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900');
  body {
  }
  h1, h2, h3 {
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
