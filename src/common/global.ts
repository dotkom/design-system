import { createGlobalStyle } from 'styled-components';
import Reset from './reset';
import { media, breakPointsInPX } from './layout';

export const GlobalStyle = createGlobalStyle`
  ${Reset}

  body {
    font-family: 'Source Sans Pro', sans-serif;
    line-height: 1.5;
  }
  :root {
    --font-base-size: 1.2rem;
    --font-min-scale: 1;
    --font-max-scale: 1.2;
    --font-size: calc(var(--font-base-size) * var(--font-min-scale));

    --font-size-xxs: calc(var(--font-size) / (1.25 * 1.25 * 1.25));
    --font-size-xs: calc(var(--font-size) / (1.25 * 1.25));
    --font-size-sm: calc(var(--font-size) / 1.25);
    --font-size-md: calc(var(--font-size));
    --font-size-lg: calc(var(--font-size) * 1.25);
    --font-size-xl: calc(var(--font-size) * 1.25 * 1.25);
    --font-size-xxl: calc(var(--font-size) * 1.25 * 1.25 * 1.25);

    /*
    Borrowed from https://css-tricks.com/snippets/css/fluid-typography/:
    font-size: calc([min-size] + ([max-size] - [min-size]) * ((100vw - [min-view-size]px) / ([max-view-size] - [min-view-size])))
    */
    @media ${media.tabletAndUp} {
      --font-size: calc(var(--font-min-scale) * (var(--font-base-size) + (1.2 * 16) * (var(--font-max-scale) - var(--font-min-scale)) * ((100vw - ${
        breakPointsInPX.minTabletWidth
      }px) / ${breakPointsInPX.minDesktopWidth - breakPointsInPX.minTabletWidth})));
    }
    @media ${media.desktopAndUp} {
      --font-size: calc(var(--font-base-size) * var(--font-max-scale));
    }
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Source Serif Pro', sans-serif;
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
