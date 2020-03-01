import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from 'common/colors';

import Icon from 'components/icon/Icon';

export interface Props {
  initialChecked?: boolean;
  disabled?: boolean;
  scale?: number;
}

const ToggleSwitch = ({ initialChecked = false, disabled = false, scale = 1, ...props }: Props) => {
  const [id] = useState('toggle-switch-' + Math.floor(Math.random() * 1000));
  return (
    <>
      <Checkbox id={id} type="checkbox" defaultChecked={initialChecked} disabled={disabled} {...props} />
      <ToggleSwitchContainer htmlFor={id} scale={scale} borderScale={3} slideWidth={1.6}>
        <Slider>
          <CheckIcon name="clear" className="is-not-checked" />
          <CheckIcon name="check" className="is-checked" />
        </Slider>
      </ToggleSwitchContainer>
    </>
  );
};

export default ToggleSwitch;

const Checkbox = styled.input`
  display: none;
  position: relative;

  &:checked {
    & + label > div {
      background: ${colors.success};
      left: calc(100% - 1em);
    }
    & + label > div > .is-not-checked {
      display: none;
    }
  }

  &:not(:checked) {
    & + label > div > .is-checked {
      display: none;
    }
  }

  &:disabled {
    & + label {
      background: ${colors.grayLighten90};
      cursor: not-allowed;

      & > div {
        background: ${colors.grayLighten60};
      }
    }
  }
`;

const ToggleSwitchContainer = styled.label<{ scale: number; borderScale: number; slideWidth: number }>`
  position: relative;
  display: inline-block;
  background: #fff;
  font-size: ${({ scale }) => scale * 20 + 'px'};
  width: ${({ scale, borderScale, slideWidth }) => scale * (20 + borderScale * 4) * slideWidth + 'px'};
  height: ${({ scale, borderScale }) => scale * (20 + borderScale * 4) + 'px'};
  padding: ${({ scale, borderScale }) => scale * borderScale * 2 + 'px'};
  box-shadow: inset 0 0 0 ${({ scale, borderScale }) => scale * borderScale + 'px'} ${colors.grayLighten60};
  border-radius: ${({ scale }) => scale + 'em'};
  box-sizing: border-box;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const Slider = styled.div`
  position: relative;
  left: 0;
  width: 1em;
  height: 1em;
  font-size: 1em;
  color: ${colors.white};
  background: ${colors.error};
  transition: left 0.2s, background 0.2s;
  border-radius: 50%;
`;

const CheckIcon = styled(Icon)`
  display: block;
`;
