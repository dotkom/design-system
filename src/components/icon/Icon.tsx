import React from 'react';
import styled from 'styled-components';

interface IconProps {
  name: string;
  className?: string;
}

const StyledIcon = styled.i`
  color: inherit;
  font-size: inherit;
  vertical-align: middle;
`;

const Icon = ({ name, className = '', ...props }: IconProps) => {
  return (
    <StyledIcon className={`material-icons-outlined ${className}`} {...props}>
      {name}
    </StyledIcon>
  );
};

export default Icon;
