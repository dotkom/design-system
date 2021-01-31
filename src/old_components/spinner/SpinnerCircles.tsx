import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { colors } from 'common/colors';

export interface SpinnerCirclesProps {
  primaryColor?: string;
  secondaryColor?: string;
  size?: string;
}

const SpinnerContainer = styled.div<{ size: string }>`
  position: relative;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`;

const cssloadPartAnim = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(50%);
  }
`;

const swapZIndex = keyframes`
  from {
    z-index: auto;
  }
  to {
    z-index: 10;
  }
`;

const SpinnerCircle = css`
  position: absolute;
  border-radius: 50%;
  z-index: 1;
  animation: ${cssloadPartAnim} 0.92s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite alternate;
`;

const SpinnerPrimaryCircle = styled.div<{ color: string; size: string }>`
  ${SpinnerCircle};
  left: 50%;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background: ${({ color }) => color};
  animation: ${cssloadPartAnim} 0.92s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite alternate-reverse,
    ${swapZIndex} 0.92s steps(2) -0.46s infinite alternate;
`;

const SpinnerSecondaryCircle = styled.div<{ color: string; size: string }>`
  ${SpinnerCircle};
  left: 50%;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background: ${({ color }) => color};
`;

const SpinnerCircles = ({
  primaryColor = colors.primary,
  secondaryColor = colors.primaryLighten30,
  size = '2rem',
}: SpinnerCirclesProps) => (
  <SpinnerContainer size={size}>
    <SpinnerPrimaryCircle size={size} color={primaryColor} />
    <SpinnerSecondaryCircle size={size} color={secondaryColor} />
  </SpinnerContainer>
);

export default SpinnerCircles;
