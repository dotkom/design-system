import React from 'react';
import styled, { StyledComponentProps } from 'styled-components';

interface IconProps extends StyledComponentProps<'i', any, any, any> {
  name: string;
  className?: string;
}

const StyledIcon = styled.i`
  color: inherit;
  font-size: inherit;
  vertical-align: bottom;
`;

const Icon = ({ name, className = '', ...props }: IconProps) => {
  return (
    <StyledIcon className={`material-icons-outlined ${className}`} {...props}>
      {name}
    </StyledIcon>
  );
};

export default Icon;
