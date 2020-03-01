import React from 'react';
import styled from 'styled-components';

interface IconProps {
  name: string;
}

const StyledIcon = styled.i`
  color: inherit;
  font-size: inherit;
  vertical-align: bottom;
`;

const Icon = ({ name }: IconProps) => {
  return <StyledIcon className="material-icons-outlined">{name}</StyledIcon>;
};

export default Icon;
