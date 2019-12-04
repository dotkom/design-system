import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'common/colors';
import Icon from 'components/icon/Icon';

interface SelectProps {
  children: React.ReactNode;
}

const SelectContainer = styled.div`
  display: inline;
  position: relative;

  & > *:last-child {
    position: absolute;
    font-size: 1.5rem;
    top: 0;
    right: 0;
    pointer-events: none;
    user-select: none;
    color: ${colors.grayLighten60};
  }
`;

const StyledSelect = styled.select`
  transition: all 0.2s;
  padding: 8px 20px 8px 8px;
  background: #fff;
  border-radius: 3px;
  border: 2px solid ${colors.grayLighten60};

  cursor: pointer;

  &:hover {
    border-color: ${colors.primary};
  }
  appearance: none;
`;

const Select = ({ children }: SelectProps) => {
  return (
    <SelectContainer>
      <StyledSelect>{children}</StyledSelect>
      <Icon name="keyboard_arrow_down" />
    </SelectContainer>
  );
};

export default Select;
