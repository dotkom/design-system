import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from 'common/colors';

interface CheckboxProps {
  label: string;
  isChecked: boolean;
  onCheck(): void;
  disabled?: boolean;
  error?: boolean;
}

const Checkbox = ({ label }: CheckboxProps) => {
  return (
    <div>
      <CheckboxLabel tabIndex={0}>
        <HiddenCheckbox />
        <StyledCheckbox />
        <span>{label}</span>
      </CheckboxLabel>
    </div>
  );
};

export default Checkbox;

const size = 20;

const CheckboxLabel = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding-left: ${size + 5}px;
  padding-right: 5px;
  height: ${size}px;
  cursor: pointer;
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

const StyledCheckbox = styled.div`
  ${CheckboxCommon}
  display: inline-block;
  border: 1px solid #ddd;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease-in;
  ${HiddenCheckbox}:checked + & {
    background-color: ${colors.primary};
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
    background-position: center;
    background-size: 75%;
    background-repeat: no-repeat;
  }
`;

/*
const StyledBox = styled.div<{ backgroundColor: string; borderColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: inset 0 0 0 1px ${({ borderColor }) => borderColor};
  padding: 1em;
  border-radius: 3px;
`;
*/
