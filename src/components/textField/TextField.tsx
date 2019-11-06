import React, { useState } from 'react';
import styled, { StyledComponentProps } from 'styled-components';
import { colors } from 'common/colors';

const statuses = {
  error: colors.error,
  warning: colors.warning,
  success: colors.success,
};

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
  border: none;
  border-radius: 3px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2) ${({ status }) => (status ? `, inset 0 0 0 1px ${statuses[status]}` : '')};
  padding: 0.625em 1em;
  font-size: 1em;
  color: ${colors.black};
  border: 1px solid ${colors.grayLighten90};

  &:focus {
    outline: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2), inset 0 0 0 1px ${colors.info};
  }

  &:disabled {
    background-color: ${colors.grayLighten90};
    color: ${colors.grayDarken30};
    box-shadow: none;
    border: 1px solid ${colors.grayLighten60};
  }

  &:invalid {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2),
      inset 0 0 0 1px ${({ status }) => (status ? statuses[status] : colors.error)};
    box-sizing: border-box;
  }

  &:valid + p {
    display: none;
  }

  &:invalid + p {
    font-size: 0.7em;
    color: ${({ status }) => (status ? statuses[status] : colors.error)};
  }
`;

const InputLabel = styled.label<{ color?: string }>`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  color: ${({ color }) => color || colors.primary};

  &:empty {
    margin: 0;
  }
`;

const InputMessage = styled.p`
  margin-top: 0.5rem;

  &:empty {
    display: none;
  }
`;

const TextField = ({ type = 'text', label = '', labelColor = '', errorMessage = '', ...props }: TextFieldProps) => {
  return (
    <InputContainer>
      <InputLabel color={labelColor}>{label}</InputLabel>
      <ClearableInputField type={type} {...props} />
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

const ClearableInputField = ({ disabled, ...props }: TextFieldProps) => {
  const [text, setText] = useState(props.defaultValue || '');
  return (
    <div>
      <InputField
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        {...props}
        disabled={disabled}
      />
      {text && !disabled && <ClearButton onClick={() => setText('')}>X</ClearButton>}
    </div>
  );
};

export default TextField;
