import React, { useState } from 'react';
import styled from 'styled-components';

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
  width: ${({ size }) => size * 1.5 + 'px'};
  height: ${({ size }) => size * 0.75 + 'px'};
  padding: ${({ spacing }) => spacing + 'px'};
  border: ${({ spacing }) => spacing + 'px'} solid @darkGray;
  border-radius: ${({ size, spacing }) => size + spacing + 'px'};
  box-sizing: inherit;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  ${({ disabled }) =>
    disabled &&
    `
        background: #808080;
    `}
`;

const StyledSlider = styled.div<{ checked?: boolean; size: number; spacing: number }>`
  position: absolute;
  display: inline-flex;
  align-items: center;
  left: ${({ spacing }) => spacing + 'px'};
  border-radius: 50%;
  background: @red;
  justify-content: center;

  ${({ checked, spacing }) =>
    checked &&
    `
        left: auto;
        right: ${spacing + 'px'};
        background: #1e8449;
    `}
`;

const ToggleSwitch = ({ initialChecked = false, disabled = false, size = 32 }: Props) => {
  const spacing = size / 8;
  const [checked, setChecked] = useState(initialChecked);

  function onClick() {
    setChecked(!checked);
  }

  return (
    <StyledButton size={size} spacing={spacing} disabled={disabled} onClick={onClick}>
      <StyledSlider size={size} checked={checked} spacing={spacing}>
        {checked ? <CircleCheckmark size={size / 2 + 'px'} /> : <CircleCross size={size / 2 + 'px'} />}
      </StyledSlider>
    </StyledButton>
  );
};

export default ToggleSwitch;
