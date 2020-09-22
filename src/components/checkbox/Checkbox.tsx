import React, { useState } from 'react';
import styled, { css, StyledComponentProps } from 'styled-components';
import { colors } from 'common/colors';
import Icon from 'components/icon/Icon';

interface CheckboxProps extends StyledComponentProps<'input', any, any, any> {
  label: string;
  isChecked?: boolean;
  onChange?: (checked?: boolean) => void;
  disabled?: boolean;
  error?: boolean;
}

const Checkbox = ({
  label,
  defaultChecked = false,
  onChange = () => null,
  disabled = false,
  error = false,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState<boolean>(defaultChecked);

  const update = () => {
    if (!disabled) {
      onChange(!checked);
      setChecked((prevState) => !prevState);
    }
  };

  return (
    <CheckboxLabel disabled={disabled}>
      <HiddenCheckbox checked={checked} disabled={disabled} onChange={update} {...props} />
      <StyledCheckbox tabIndex={0} error={error}>
        <StyledIcon name="done" isChecked={checked} />
      </StyledCheckbox>
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
    color: ${colors.primary};
  }
  ${({ disabled }) => disabled && CheckboxLabelDisabled};
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

const StyledIcon = styled(Icon)`
  visibility: ${(props: { isChecked: boolean | undefined }) => (props.isChecked ? 'visible' : 'hidden')};
  display: block;
`;

const StyledCheckbox = styled.div<{ error?: boolean }>`
  ${CheckboxCommon}
  display: inline-block;
  border: 2px solid ${({ error }) => (error ? colors.error : colors.grayLighten60)};
  border-radius: 3px;
  color: ${colors.white};
  background: #fff;
  transition: background-color 0.2s ease-in, border-color 0.2s;
  ${HiddenCheckbox}:checked + & {
    background: ${colors.primary};
    border-color: ${colors.primary};
  }
  ${CheckboxLabel}:hover > & {
    border-color: ${colors.primary};
  }
  ${HiddenCheckbox}:disabled + & {
    cursor: not-allowed;
    color: ${colors.grayLighten90};
    background-color: ${colors.grayLighten90};
    border-color: ${colors.grayLighten60};
  }
  ${HiddenCheckbox}:disabled:checked + & {
    color: ${colors.grayLighten60};
    background-color: ${colors.grayLighten90};
    border-color: ${colors.grayLighten60};
  }
`;
