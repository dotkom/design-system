import React, { useState } from 'react';
import styled, { StyledComponentProps } from 'styled-components';
import { colors } from 'common/colors';

const statuses = {
  error: colors.systemError,
  warning: colors.systemWarning,
  success: colors.systemSuccess
}

type StatusStrings = keyof typeof statuses;

interface TextFieldProps extends StyledComponentProps<'input', any, any, any> {
  errorMessage?: string;
  label?: string;
  labelColor?: string;
  type?: string;
  status?: StatusStrings;
}

const InputContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
`;

const InputField = styled.input<{ status?: StatusStrings }>`
  background-color: #fcfcfc;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1) ${({ status }) => status? `, inset 0 0 0 1px ${statuses[status]}`:''};
  padding: 0.625em 1em;
  font-size: 1em;
  color: ${colors.graysBlack};

  &:focus {
    outline: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), inset 0 0 0 1px ${colors.systemInfo};
  }

  &:disabled {
    background-color: #ddd;
  }

  &:invalid {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), inset 0 0 0 1px ${({ status }) => status? statuses[status] : colors.systemError};
    box-sizing: border-box;
  }

  &:valid + p {
    display: none;
  }

  &:invalid + p {
    font-size: 0.7em;
    color: ${({ status }) => status? statuses[status] : colors.systemError};
  }
`;

const InputLabel = styled.label<{ color?: string }>`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.7em;
  margin-bottom: 0.5em;
  color: ${({ color }) => color || colors.primary};

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
      <ClearableInputField {...props}/>
      <InputMessage>{errorMessage}</InputMessage>
    </InputContainer>
  );
};

const ClearButton = styled.button`
  position: relative;
  width: 1em;
  height: 1em;
  right: 2em;
  color: #777777;
  background-color: transparent;
`;

const ClearableInputField = ({disabled, ...props}:TextFieldProps) => {
  const [text, setText] = useState(props.defaultValue || '');
  return (
    <div>
      <InputField value={text} onChange={(e)=>{setText(e.target.value)}} {...props} disabled={disabled}/>
      {text && !disabled && <ClearButton onClick={() => setText('')}>X</ClearButton>}
    </div>
  );
}

export default TextField;
