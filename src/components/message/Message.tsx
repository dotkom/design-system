import * as React from 'react';
import styled, { css } from 'styled-components';
import { colors, ColorName } from 'common/colors';
import Icon from 'components/icon/Icon';

interface AlertProps {
  type: 'info' | 'success' | 'warning' | 'error';
  children: React.ReactNode;
}

const IconWrapper = styled.span<{ color: string }>`
  color: ${({ color }) => color};
  font-size: 1.5rem;
  margin-right: 0.5rem;
  display: flex;
`;

const StyledBox = styled.div<{ type: string }>`
  display: flex;
  padding: 1rem;
  border-radius: 3px;
  line-height: 1.25;
  ${({ type }) => css`
    border: 2px solid ${colors[type as ColorName]};
    color: ${colors[`${type}Darken70` as ColorName]};
    background: ${colors[`${type}Lighten90` as ColorName]};
  `}
`;

const Alert = ({ type, children }: AlertProps) => {
  const iconNames = {
    info: 'info',
    success: 'done',
    warning: 'warning',
    error: 'clear',
  };

  return (
    <StyledBox type={type}>
      <IconWrapper color={colors[type]}>
        <Icon name={iconNames[type]} />
      </IconWrapper>
      {children}
    </StyledBox>
  );
};

export default Alert;
