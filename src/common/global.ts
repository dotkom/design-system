import { createGlobalStyle } from 'styled-components';
import Reset from './reset';
import { media } from './layout';

export const GlobalStyle = createGlobalStyle`
  ${Reset}
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700|Source+Code+Pro|Material+Icons+Outlined');

  body {
    font-family: 'Source Sans Pro', sans-serif;
  }
  :root {
    --font-base-size: 1.2rem;
    --font-scale: 1.4;
    --font-size-xxs: calc(var(--font-base-size) / (var(--font-scale) * var(--font-scale) * var(--font-scale)));
    --font-size-xs: calc(var(--font-base-size) / (var(--font-scale) * var(--font-scale)));
    --font-size-sm: calc(var(--font-base-size) / var(--font-scale));
    --font-size-md: calc(var(--font-base-size));
    --font-size-lg: calc(var(--font-base-size) * var(--font-scale));
    --font-size-xl: calc(var(--font-base-size) * var(--font-scale) * var(--font-scale));
    @media ${media.tabletAndUp} {
      --font-base-size: 1.25rem;
      --font-scale: 1.5;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Source Code Pro', monospace;
  }
  b, strong {
    font-weight: bold;
  }
  code {
    white-space: pre-wrap;
    font-family: 'Source Code Pro', monospace;
  }
  samp {
    font-family: 'Source Code Pro', monospace;
  }
`;
