import * as React from 'react';
import styled, { css } from 'styled-components';
import { colors, ColorName } from 'common/colors';
import Icon from 'components/icon/Icon';

interface MessageProps {
  status: 'info' | 'success' | 'warning' | 'error';
  children: React.ReactNode;
}

const IconWrapper = styled.span<{ color: string }>`
  color: ${({ color }) => color};
  font-size: 1.5rem;
  margin-right: 0.5rem;
  display: flex;
`;

const StyledBox = styled.div<{ status: string }>`
  display: flex;
  padding: 1rem;
  border-radius: 3px;
  line-height: 1.25;
  ${({ status }) => css`
    border: 2px solid ${colors[status as ColorName]};
    color: ${colors[`${status}Darken70` as ColorName]};
    background: ${colors[`${status}Lighten90` as ColorName]};
  `}
`;

const Message = ({ status, children }: MessageProps) => {
  const iconNames = {
    info: 'info',
    success: 'done',
    warning: 'warning',
    error: 'clear',
  };

  return (
    <StyledBox status={status}>
      <IconWrapper color={colors[status]}>
        <Icon name={iconNames[status]} />
      </IconWrapper>
      {children}
    </StyledBox>
  );
};

export default Message;
