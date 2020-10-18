import * as React from 'react';
import ReactSelect from 'react-select';
import styled, { StyledComponentProps } from 'styled-components';
import { colors } from 'common/colors';

interface SelectProps extends StyledComponentProps<'select', any, any, any> {
  options: [{ value: any; label: any }];
}

const StyledSelect = styled(ReactSelect)`
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

const Select = ({ options, ...rest }: SelectProps) => {
  return <StyledSelect options={options} {...rest} />;
};

export default Select;
