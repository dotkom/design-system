import React from 'react';
import styled from 'styled-components';

export interface Props {
  color?: string;
  size?: string;
}

const CircleContainer = styled.svg<{ size?: string }>`
  height: ${({ size }): string | undefined => size};
  width: ${({ size }): string | undefined => size};
`;

const IconWrapper = styled.div<{}>`
  display: flex;
`;

const CircleCross = ({ color = '#eb5757', size = '100px' }: Props): JSX.Element => (
  <IconWrapper>
    <CircleContainer viewBox="0 0 100 100" size={size}>
      <circle cx="50" cy="50" r="50" fill={color} />
      <rect x="15" y="22.0711" width="10" height="90" transform="rotate(-45 15 22.0711)" fill="white" />
      <rect x="78.6396" y="15" width="10" height="90" transform="rotate(45 78.6396 15)" fill="white" />
    </CircleContainer>
  </IconWrapper>
);

export default CircleCross;
