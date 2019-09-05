import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from 'common/colors';

type ErrorFunction = (input: string) => string;
type ErrorMessage = string | ErrorFunction;

interface IInput {
  type: string;
  disabled?: boolean;
  errorMessage?: ErrorMessage;
  [props: string]: any;
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

const InputMessage = styled.p<{ color?: string }>`
  color: ${({ color }) => color};
`;

const Input = ({
  type,
  disabled = false,
  label = '',
  labelColor = '',
  errorMessage = '',
  defaultValue = '',
  onChange = (...args: any[]) => {},
  ...props
}: IInput) => {
  const [value, setValue] = useState(defaultValue);

  const extendedOnChange = (evt: any, ...args: any[]) => {
    setValue(evt.target.value);
    onChange(evt, ...args);
  };

  return (
    <InputContainer>
      <InputLabel color={labelColor}>{label}</InputLabel>
      <InputField {...props} disabled={disabled} defaultValue={defaultValue} onChange={extendedOnChange} />
      <InputMessage>{typeof errorMessage === 'function' ? errorMessage(value) : errorMessage}</InputMessage>
    </InputContainer>
  );
};

export default Input;
