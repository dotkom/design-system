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
  h1, h2, h3 {
    font-family: 'Source Code Pro', monospace;
    margin: 2rem 0 1rem;
    line-height: 1.2;
  }
  h1 {
    font-size: var(--font-size-xl);
  }
  h2 {
    font-size: var(--font-size-lg);
  }
  h3 {
    font-size: var(--font-size-md);
  }
  samp {
    font-family: 'Source Code Pro', monospace;
  }
`;
