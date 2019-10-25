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
      color = colors.successLighten90;
      bordercolor = colors.success;
      break;
    }
    case 'alert': {
      color = colors.warningLighten90;
      bordercolor = colors.warning;
      break;
    }
    case 'error': {
      color = colors.errorLighten90;
      bordercolor = colors.error;
      break;
    }
    case 'info': {
      color = colors.infoLighten90;
      bordercolor = colors.info;
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
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid ${({ borderColor }) => borderColor};
  padding: 1em;
  border-radius: 3px;
`;
