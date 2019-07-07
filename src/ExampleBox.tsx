import React from 'react';
import styled from 'styled-components';
import { colors } from './colors';
import { HeadingLarge, Paragrah, HeadingSmall } from './global';

const ExampleBox = () => {
  const exampleProp = true;

  return (
    <>
      <HeadingLarge>HeadingLarge</HeadingLarge>
      <Paragrah>Paragrah</Paragrah>
      <HeadingSmall>HeadingSmall</HeadingSmall>
      <StyledBox someProp={exampleProp}>Heisann</StyledBox>
    </>
  );
};

export default ExampleBox;

const StyledBox = styled.div<{ someProp: boolean }>`
  ${({ someProp }) => (someProp ? 'color: gray' : null)}
  background-color: ${colors.systemWarning50};
  `;
