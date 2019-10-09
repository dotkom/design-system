import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from 'common/colors';

interface RadioProps {
  labels: string[];
  groupName: string;
  disabled?: boolean;
  error?: boolean;
}

const Radio = ({ labels, groupName, disabled, error }: RadioProps) => {
  const radios = labels.map((label) => (
    <RadioLabel disabled={disabled}>
      <RadioButton name={groupName} disabled={disabled} />
      {label}
    </RadioLabel>
  ));
  return <RadioGroup error={error}>{radios}</RadioGroup>;
};

const RadioButton = styled.input.attrs({ type: 'radio' })`
  margin-right: 0.5rem;
`;

const RadioLabelDisabled = css`
  color: ${colors.graysGray};
  cursor: not-allowed;
  &:hover {
    color: ${colors.graysGray};
  }
`;

const RadioLabel = styled.label<{ disabled?: boolean }>`
  display: block;
  cursor: pointer;
  &:hover {
    color: ${colors.primary};
  }
  ${({ disabled }) => disabled && RadioLabelDisabled};
`;

const RadioGroupError = css`
  background: ${colors.systemError20};
  border: 1px solid ${colors.systemError};
`;

const RadioGroup = styled.div<{ error?: boolean }>`
  padding: 1rem;
  & > * + * {
    margin-top: 0.5rem;
  }
  ${({ error }) => error && RadioGroupError};
`;

export default Radio;
