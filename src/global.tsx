import styled, { createGlobalStyle } from 'styled-components';
import React from 'react';

const GlobalStyles = createGlobalStyle`
`;

export const HeadingLarge = styled.h1`
  font-family: 'Source Serif Pro', serif;
  font-size: 3rem;
`;

export const HeadingMedium = styled.h2`
  font-family: 'Source Serif Pro', serif;
  font-size: 2.5rem;
`;

export const HeadingSmall = styled.h3`
  font-family: 'Source Serif Pro', serif;
  font-size: 2rem;
`;

export const Paragrah = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
`;

export const Link = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  font-weight: bold;
`;

export const Description = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 11px;
`;

export const globalStylesDecorator = (storyFn: any) => {
  return (
    <>
      <GlobalStyles />
      {storyFn()}
    </>
  );
};

export default GlobalStyles;
