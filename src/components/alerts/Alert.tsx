import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'common/colors';
import Icon from '../icon/Icon';

interface AlertProps {
  type?: 'success' | 'alert' | 'error' | 'info';
  children: React.ReactNode;
}

const IconWrapper = styled.span<{ color: string }>`
  color: ${({ color }) => color};
  margin-right: 0.5rem;
`;

const Alert = ({ type = 'info', children }: AlertProps) => {
  let color: string;
  let bordercolor: string;
  let iconName: string;

  switch (type) {
    case 'success': {
      color = colors.successLighten90;
      bordercolor = colors.success;
      iconName = 'done';
      break;
    }
    case 'alert': {
      color = colors.warningLighten90;
      bordercolor = colors.warning;
      iconName = 'warning';
      break;
    }
    case 'error': {
      color = colors.errorLighten90;
      bordercolor = colors.error;
      iconName = 'cancel';
      break;
    }
    case 'info': {
      color = colors.infoLighten90;
      bordercolor = colors.info;
      iconName = 'info';
      break;
    }
    default: {
      color = colors.white;
      bordercolor = colors.black;
      iconName = 'help';
      break;
    }
  }

  return (
    <StyledBox backgroundColor={color} borderColor={bordercolor}>
      <IconWrapper color={bordercolor}>
        <Icon name={iconName} />
      </IconWrapper>
      {children}
    </StyledBox>
  );
};

export default Alert;

const StyledBox = styled.div<{ backgroundColor: string; borderColor: string }>`
  display: flex;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid ${({ borderColor }) => borderColor};
  padding: 1rem;
  border-radius: 3px;
  font-size: 1.25rem;
`;
