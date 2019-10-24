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
      color = colors.successLighten15;
      bordercolor = colors.successDarken15;
      break;
    }
    case 'alert': {
      color = colors.warningLighten15;
      bordercolor = colors.warningDarken15;
      break;
    }
    case 'error': {
      color = colors.errorLighten15;
      bordercolor = colors.errorDarken15;
      break;
    }
    case 'info': {
      color = colors.infoLighten15;
      bordercolor = colors.infoDarken15;
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
