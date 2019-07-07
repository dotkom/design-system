import React from 'react';
import styled from 'styled-components';
import { colors } from './colors';

const TextField = () => {
  return <StyledTextField placeholder="Body..." />;
};

export default TextField;

const StyledTextField = styled.input`
  margin: 0;
  border: 0;
  border-radius: 3px;
  padding: 10px 16px;
  background: ${colors.graysWhite};
  line-height: 1;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;
