import React from 'react';
import styled from 'styled-components';
import { colors } from './colors';

const ExampleBox = () => {
  const exampleProp = true;

  return <StyledBox someProp={exampleProp}>Heisann</StyledBox>;
};

export default ExampleBox;

const StyledBox = styled.div<{ someProp: boolean }>`
  ${({ someProp }) => (someProp ? 'color: gray' : null)}
  background-color: ${colors.systemWarning50};
`;
