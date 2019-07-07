import { createGlobalStyle } from 'styled-components';
import React from 'react';

const GlobalStyles = createGlobalStyle`

`;

export const globalStylesDecorator = (storyFn: any) => {
  return (
    <>
      <GlobalStyles />
      {storyFn}
    </>
  );
};

export default GlobalStyles;
