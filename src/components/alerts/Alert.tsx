import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'common/colors';

interface IAlert {
  type: 'success' | 'alert' | 'error' | 'info';
  children: JSX.Element[];
}

const Alert = ({ type, children }: IAlert) => {
  let color: string;
  let bordercolor: string;

  switch (type) {
    case 'success': {
      color = colors.systemSuccess50;
      bordercolor = colors.systemSuccess;
      break;
    }
    case 'alert': {
      color = colors.systemWarning50;
      bordercolor = colors.systemWarning;
      break;
    }
    case 'error': {
      color = colors.systemError50;
      bordercolor = colors.systemError;
      break;
    }
    case 'info': {
      color = colors.systemInfo20;
      bordercolor = colors.systemInfo;
      break;
    }
    default: {
      color = colors.graysWhite;
      bordercolor = colors.graysGray;
      break;
    }
  }

  return (
    <StyledBox backgroundColor={color} borderColor={bordercolor}>
      {children}
    </StyledBox>
  );
};

export default Alert;

const StyledBox = styled.div<{ backgroundColor: string; borderColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: inset 0 0 0 1px ${({ borderColor }) => borderColor};
  padding: 1em;
  border-radius: 3px;
`;
