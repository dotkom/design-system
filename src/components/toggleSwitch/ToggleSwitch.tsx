import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { colors } from 'common/colors';

import { CircleCheckmark } from 'index';
import { CircleCross } from 'index';

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
  position: relative;
  left: 0;
  border-radius: 50%;
  transition: left 0.2s;

  ${({ checked, size }) =>
    Boolean(checked) &&
    css`
      left: calc(100% - ${size}px);
    `}
`;

const ToggleSwitch = ({ initialChecked = false, disabled = false, size = 16 }: Props): JSX.Element => {
  const spacing = size / 8;
  const [checked, setChecked] = useState(initialChecked);

  const onClick = () => {
    setChecked((current) => !current);
  };

  return (
    <StyledButton size={size} spacing={spacing} disabled={disabled} onClick={onClick}>
      <StyledSlider size={size} checked={checked} spacing={spacing}>
        {checked ? <CircleCheckmark size={size + 'px'} /> : <CircleCross size={size + 'px'} />}
      </StyledSlider>
    </StyledButton>
  );
};

export default ToggleSwitch;
