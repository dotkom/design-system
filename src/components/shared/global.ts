import { createGlobalStyle, css } from 'styled-components';

export const bodyStyles = css`
  margin: 0;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;
  * {
    box-sizing: border-box;
  }
  sub,
  sup {
    font-size: 0.8em;
  }
  sub {
    bottom: -0.2em;
  }
  sup {
    top: -0.2em;
  }
  hr {
    border: none;
    border-top: 1px solid #000;
    clear: both;
    margin-bottom: 1.25rem;
  }
  code,
  pre {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    display: inline-block;
    padding-left: 2px;
    padding-right: 2px;
    vertical-align: baseline;
  }
  pre {
    line-height: 18px;
    padding: 11px 1rem;
    white-space: pre-wrap;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 3px;
    margin: 1rem 0;
  }
  &.ReactModal__Body--open {
    overflow: hidden;
    &.hide-intercom #intercom-container {
      display: none;
    }
  }
  .ReactModalPortal > div {
    opacity: 0;
  }
  .ReactModalPortal .ReactModal__Overlay {
    transition: all 200ms ease-in;
    &--after-open {
      opacity: 1;
    }
    &--before-close {
      opacity: 0;
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900');
  body {
    ${bodyStyles}
  }
`;
