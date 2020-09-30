import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from 'common/colors';
import { RadioProps } from './RadioGroup';

interface RadioButtonProps extends Omit<RadioProps, 'choices' | 'onChange'> {
  value: string;
  children: React.ReactNode;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // onChange is supplied through RadioGroup if wrapped on render, so TS fail to see it.
}

const RadioButton: React.FC<RadioButtonProps> = ({
  children,
  checked,
  value,
  disabled,
  groupName,
  error,
  onChange,
}: RadioButtonProps) => {
  return (
    <RadioLabel disabled={disabled}>
      <HiddenRadio name={groupName} disabled={disabled} onChange={onChange} value={value} checked={checked} />
      <StyledRadio tabIndex={0} error={error} />
      {children}
    </RadioLabel>
  );
};

const size = 20;

const RadioLabelDisabled = css`
  color: ${colors.grayLighten60};
  cursor: not-allowed;

  &:hover {
    color: ${colors.grayLighten60};
  }
`;

const RadioLabel = styled.label<{ disabled?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 5px 5px 5px ${size + 10}px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${colors.primary};
  }

  ${({ disabled }) => disabled && RadioLabelDisabled};
`;

const HiddenRadioCommon = css`
  position: absolute;
  width: ${size}px;
  height: ${size}px;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  ${HiddenRadioCommon}
  visibility: hidden;
`;

const StyledRadio = styled.div<{ error?: boolean }>`
  ${HiddenRadioCommon}
  background: #fff;
  border: 2px solid ${({ error }) => (error ? colors.error : colors.grayLighten60)};
  border-radius: 50%;
  transition: border 0.2s;

  ${RadioLabel}:hover &,
  ${HiddenRadio}:checked + & {
    border-color: ${colors.primary};
  }

  ${HiddenRadio}:checked + & {
    border-width: ${size / 3.5}px;
  }

  ${HiddenRadio}:disabled + & {
    cursor: not-allowed;
    background-color: ${colors.grayLighten90};
    border-color: ${colors.grayLighten90};
  }
`;

export default RadioButton;
