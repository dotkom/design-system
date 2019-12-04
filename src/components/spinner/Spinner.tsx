import React, { FC } from 'react';
import styled from 'styled-components';

import { colors } from 'common/colors';

const SpinnerSVG = styled.svg`
  width: 50px;
`;

interface ISpinnerProps {
  /** Animation timer in seconds */
  time: number;
  /** Starting point of animation in degrees */
  start: number;
  /** End point of animation in degrees */
  end: number;
  color: string;
}

const Path = styled.path.attrs({
  d: 'M25,8.2C15.72,8.2,8.2,15.72,8.2,25',
})``;

const SpinnerPath = styled(Path)<ISpinnerProps>`
  fill: none;
  stroke-width: 6;
  stroke-linecap: round;
  stroke-miterlimit: 10;
  transform: rotate(${({ start }) => start % 361}deg);
  transform-origin: 50% 50%;
  animation-fill-mode: forwards;

  stroke: ${({ color }) => color};
  animation: ${({ time }) => time}s spin infinite;
  animation-timing-function: cubic-bezier(0.43, 0.54, 0.61, 0.74);

  @keyframes spin {
    from {
      transform: rotate(${({ start }) => start % 361}deg);
    }
    to {
      transform: rotate(${({ end }) => end % 361}deg);
    }
  }
`;

interface IProps {
  primaryColor?: string;
  secondaryColor?: string;
}

const Spinner: FC<IProps> = ({ primaryColor = colors.primary, secondaryColor = colors.secondary }) => {
  return (
    <SpinnerSVG version="1.1" x="0px" y="0px" viewBox="0 0 50 50">
      <SpinnerPath time={1.4} start={5} end={5} color={secondaryColor} />
      <SpinnerPath time={1.2} start={0} end={360} color={primaryColor} />
    </SpinnerSVG>
  );
};

export default Spinner;
