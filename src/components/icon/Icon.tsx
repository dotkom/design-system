import React from 'react';
import styled, { StyledComponentProps } from 'styled-components';

interface IconProps extends StyledComponentProps<'i', any, any, any> {
  name: string;
}

const StyledIcon = styled.i`
  color: inherit;
  font-size: inherit;
  vertical-align: bottom;
`;

const Icon = ({ name }: IconProps) => {
  return <StyledIcon className="material-icons-two-tone">{name}</StyledIcon>;
};

export default Icon;
