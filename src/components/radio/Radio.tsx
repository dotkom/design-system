import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from 'common/colors';
import _ from 'lodash';

interface RadioProps {
  labels?: string[];
  disabled?: boolean;
  error?: boolean;
  children?: React.ReactNode;
}


const Radio = ({ labels, disabled, error, children }: RadioProps) => {
  const groupId = _.uniqueId();
  const radioOptions = labels || children;
  if(!radioOptions || _.isEmpty(radioOptions)) return null;
  const radios = (radioOptions as Array<string|JSX.Element>).map((label, index) => (
    <RadioLabel key={index} disabled={disabled}>
      <HiddenRadio name={groupId} disabled={disabled} />
      <StyledRadio tabIndex={0} error={error} />
      {label}
    </RadioLabel>
  ));
  return <RadioGroup error={error}>{radios}</RadioGroup>;
};

const size = 20;

const RadioGroup = styled.div<{ error?: boolean }>`
  & > * + * {
    margin-top: 0.5rem;
  }
`;

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

export default Radio;
