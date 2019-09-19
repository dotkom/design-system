import React from 'react';
import styled, { StyledComponentProps } from 'styled-components';
import { colors } from '../../common/colors';

type ErrorFunction = (input: string) => string;
type ErrorMessage = string | ErrorFunction;

interface TextFieldProps extends StyledComponentProps<'input', any, any, any> {
  errorMessage?: ErrorMessage;
  invalidColor?: string;
  label?: string;
  labelColor?: string;
  type?: string;
}

const InputContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
`;

const InputField = styled.input<{ invalidColor?: string }>`
  background-color: #fcfcfc;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0.625em 1em;
  font-size: 1em;
  color: ${colors.graysBlack};

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: #ddd;
  }

  &:invalid {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), inset 0 0 0 1px ${({ invalidColor }) => invalidColor || 'red'};
    box-sizing: border-box;
  }

  &:valid + p {
    display: none;
  }

  &:invalid + p {
    font-size: 0.7em;
    color: ${({ invalidColor }) => invalidColor || 'red'};
  }
`;

const InputLabel = styled.label<{ color?: string }>`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.7em;
  margin-bottom: 0.5em;
  color: ${({ color }) => color || colors.primay};

  &:empty {
    margin: 0;
  }
`;

const InputMessage = styled.p`
  &:empty {
    display: none;
  }
`;

const TextField = ({ type = 'text', label = '', labelColor = '', errorMessage = '', ...props }: TextFieldProps) => {
  return (
    <InputContainer>
      <InputLabel color={labelColor}>{label}</InputLabel>
      <InputField {...props} />
      <InputMessage>{errorMessage}</InputMessage>
    </InputContainer>
  );
};

export default TextField;
