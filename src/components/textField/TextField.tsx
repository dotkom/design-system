import React, { useState } from 'react';
import styled, { StyledComponentProps } from 'styled-components';
import { colors } from 'common/colors';
import Icon from 'components/icon/Icon';

const statuses = {
  error: colors.error,
  warning: colors.warning,
  success: colors.success,
};

type StatusStrings = keyof typeof statuses;

interface TextFieldProps extends StyledComponentProps<'input', any, any, any> {
  errorMessage?: string;
  label?: string;
  type?: string;
  status?: StatusStrings;
}

const InputField = styled.input<{ status?: StatusStrings }>`
  width: 100%;
  border-radius: 3px;
  padding: 0.5rem;
  padding-right: 2.5rem;
  font-size: 1em;
  color: ${colors.black};
  border: 2px solid ${({ status }) => (status ? statuses[status] : colors.grayLighten60)};
  transition: border-color 0.2s;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }

  &:disabled {
    background-color: ${colors.grayLighten90};
    color: ${colors.grayDarken30};
  }

  &:invalid {
    border-color: ${({ status }) => (status ? statuses[status] : colors.error)};
  }
`;

const InputLabel = styled.label`
  display: block;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  color: ${colors.primary};

  &:empty {
    display: none;
  }
`;

const InputMessage = styled.p`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  color: ${colors.error};

  &:empty {
    display: none;
  }
`;

const ClearButton = styled.button`
  position: absolute;
  padding: 0.8rem;
  font-size: 1rem;
  top: 0;
  right: 0;
  bottom: 0;
  color: ${colors.grayLighten30};
  cursor: pointer;
  background: transparent;
`;

const RelativeContainer = styled.div`
  position: relative;
`;

const StyledIcon = styled(Icon)`
  display: block;
`;

const ClearableInputField = ({ disabled, ...props }: TextFieldProps) => {
  const [text, setText] = useState(props.defaultValue || '');
  return (
    <RelativeContainer>
      <InputField
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        {...props}
        disabled={disabled}
      />
      {text && !disabled && (
        <ClearButton onClick={() => setText('')}>
          <StyledIcon name="clear" />
        </ClearButton>
      )}
    </RelativeContainer>
  );
};

const TextField = ({ type = 'text', label = '', errorMessage = '', ...props }: TextFieldProps) => {
  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <ClearableInputField type={type} {...props} />
      <InputMessage>{errorMessage}</InputMessage>
    </div>
  );
};

export default TextField;
