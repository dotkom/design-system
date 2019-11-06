import React from 'react';
import styled, { StyledComponentProps } from 'styled-components';
import { colors } from 'common/colors';

interface TooltipProps extends StyledComponentProps<'div', any, any, any> {
  children: React.ReactNode;
  body: string;
}

const StyledTooltip = styled.div`
  background: ${colors.graysGray};
  color: white;
  position: absolute;
  padding: 12px 24px;
  border-radius: 5px;
  margin-top: 5px;
  pointer-events: none;
  opacity: 0;
  transition: opacity ease-in-out 250ms;
`;

const Wrapper = styled.div`
  position: relative;
  :hover {
    > .tooltip {
      opacity: 1;
    }
  }
`;

const Tooltip = ({ children, body }: TooltipProps): JSX.Element => {
  return (
    <Wrapper>
      {children}
      <StyledTooltip className="tooltip">{body}</StyledTooltip>
    </Wrapper>
  );
};

export default Tooltip;
