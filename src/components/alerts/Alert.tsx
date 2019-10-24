import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'common/colors';

interface AlertProps {
  type?: 'success' | 'alert' | 'error' | 'info';
  children: React.ReactNode;
}

const Alert = ({ type = 'info', children }: AlertProps): JSX.Element => {
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
      color = colors.white;
      bordercolor = colors.black;
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
  background-color: ${({ backgroundColor }): string => backgroundColor};
  border: 1px solid ${({ borderColor }): string => borderColor};
  padding: 1em;
  border-radius: 3px;
`;
