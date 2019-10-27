import React from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { colors } from 'common/colors';

interface CheckboxProps {
  label: string;
  isChecked?: boolean;
  onCheck: (isChecked: boolean) => void;
  disabled?: boolean;
  error?: boolean;
}

const Checkbox = ({ label, isChecked, onCheck, disabled, error }: CheckboxProps): JSX.Element => {
  return (
    <CheckboxLabel onChange={(): void => onCheck(!isChecked)} disabled={disabled}>
      <HiddenCheckbox checked={isChecked} disabled={disabled} />
      <StyledCheckbox tabIndex={0} error={error} />
      <span>{label}</span>
    </CheckboxLabel>
  );
};

export default Checkbox;

const size = 20;

const CheckboxLabelDisabled = css`
  color: ${colors.grayLighten60};
  cursor: not-allowed;
  &:hover {
    color: ${colors.grayLighten60};
  }
`;

const CheckboxLabel = styled.label<{ disabled?: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding-left: ${size + 5}px;
  padding-right: 5px;
  height: ${size}px;
  cursor: pointer;
  &:hover {
    color: ${colors.primaryDarken45};
  }
  ${({ disabled }): FlattenSimpleInterpolation | undefined | false => disabled && CheckboxLabelDisabled};
`;

const CheckboxCommon = css`
  position: absolute;
  left: 0;
  width: ${size}px;
  height: ${size}px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  ${CheckboxCommon}
  visibility: hidden;
`;

const StyledCheckbox = styled.div<{ error?: boolean }>`
  ${CheckboxCommon}
  display: inline-block;
  border: 1px solid ${({ error }): string => (error ? colors.error : colors.grayLighten90)};
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s ease-in, border-color 0.2s;
  ${HiddenCheckbox}:checked + & {
    background-color: ${colors.primary};
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
    background-position: center;
    background-size: 75%;
    background-repeat: no-repeat;
    border-color: ${colors.primaryLighten45};
  }
  ${CheckboxLabel}:hover & {
    border-color: ${colors.primaryLighten45};
  }
  ${HiddenCheckbox}:disabled + & {
    cursor: not-allowed;
    background-color: ${colors.grayLighten90};
    border-color: ${colors.grayLighten60};
  }
`;
