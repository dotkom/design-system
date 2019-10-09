import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from 'common/colors';

interface RadioProps {
  labels: string[];
  groupName: string;
  disabled?: boolean;
}

const Radio = ({ labels, groupName, disabled }: RadioProps) => {
  const radios = labels.map((label) => (
    <RadioLabel disabled={disabled}>
      <RadioButton name={groupName} disabled={disabled} />
      {label}
    </RadioLabel>
  ));
  return <RadioGroup>{radios}</RadioGroup>;
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

const RadioGroup = styled.div`
  & > * + * {
    margin-top: 0.5rem;
  }
`;

export default Radio;
