import React, { useState } from 'react';
import styled, { StyledComponentProps } from 'styled-components';
import { colors } from 'common/colors';

const statuses = {
  error: colors.error,
  warning: colors.warning,
  success: colors.success,
};

type StatusStrings = keyof typeof statuses;

interface TextAreaProps extends StyledComponentProps<'input', any, any, any> {
  errorMessage?: string;
  label?: string;
  type?: string;
  status?: StatusStrings;
}

const InputContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
`;

const StyledTextarea = styled.textarea<{ status?: StatusStrings }>`
  border: none;
  border-radius: 3px;
  padding: 0.5rem;
  padding-right: 1.5rem;
  font-size: 1em;
  color: ${colors.black};
  border: 2px solid ${({ status }) => (status ? statuses[status] : colors.grayLighten60)};
  transition: border-color 0.2s;
  resize: vertical;
  min-height: 4rem;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }

  &:disabled {
    background-color: ${colors.grayLighten90};
    color: ${colors.grayDarken30};
    resize: none;
  }

  &:invalid {
    border-color: ${({ status }) => (status ? statuses[status] : colors.error)};
  }
`;

const InputLabel = styled.label`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  color: ${colors.primary};

  &:empty {
    display: none;
  }
`;

const InputMessage = styled.p`
  margin-top: 0.5rem;
  color: ${colors.error};

  &:empty {
    display: none;
  }
`;

const TextArea = ({ type = 'text', label = '', errorMessage = '', ...props }: TextAreaProps) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputArea type={type} {...props} />
      <InputMessage>{errorMessage}</InputMessage>
    </InputContainer>
  );
};

const InputArea = ({ disabled, ...props }: TextAreaProps) => {
  const [text, setText] = useState(props.defaultValue || '');
  return (
    <StyledTextarea
      value={text}
      onChange={(e) => {
        setText(e.target.value);
      }}
      {...props}
      disabled={disabled}
    />
  );
};

export default TextArea;
