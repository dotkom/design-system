import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { colors } from 'common/colors';

import Icon from 'components/icon/Icon';

export interface Props {
  initialChecked?: boolean;
  disabled?: boolean;
  onChange: () => void;
  size?: number;
}

const StyledButton = styled.button<{ spacing: number; size: number; disabled: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  background: #fff;
  width: ${({ size }) => size * 2 + 'px'};
  height: ${({ size }) => size + 'px'};
  padding: ${({ spacing }) => spacing + 'px'};
  border: ${({ spacing }) => spacing + 'px'} solid ${colors.grayLighten60};
  border-radius: ${({ size, spacing }) => size + spacing + 'px'};
  box-sizing: content-box;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background: ${colors.grayLighten90};
      cursor: not-allowed;
    `}
`;

const StyledSlider = styled.div<{ checked?: boolean; size: number; spacing: number }>`
  display: inline-block;
  position: relative;
  left: 0;
  overflow: hidden;
  border-radius: 50%;
  width: ${({ size }) => size + 'px'};
  font-size: ${({ size }) => size + 'px'};
  background: ${({ checked }) => (checked ? colors.success : colors.error)};
  color: ${colors.white};
  transition: left 0.2s;

  ${({ checked, size }) =>
    checked &&
    css`
      left: calc(100% - ${size}px);
    `}
`;

const ToggleSwitch = ({ initialChecked = false, disabled = false, size = 16 }: Props) => {
  const spacing = size / 8;
  const [checked, setChecked] = useState(initialChecked);

  const onClick = () => {
    setChecked((current) => !current);
  };

  return (
    <StyledButton size={size} spacing={spacing} disabled={disabled} onClick={onClick}>
      <StyledSlider size={size} checked={checked} spacing={spacing}>
        {checked ? <Icon name="check-circle" /> : <Icon name="clear" />}
      </StyledSlider>
    </StyledButton>
  );
};

export default ToggleSwitch;
