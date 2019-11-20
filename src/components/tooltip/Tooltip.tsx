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
  top: 105%;
  left: -33%;
  width: max-content;
  border-radius: 5px;
  margin-top: 5px;
  pointer-events: none;
  text-align: center;
  opacity: 0;
  transition: opacity ease-in-out 250ms;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-bottom-color: ${colors.graysGray};
    border-top: 0;
    margin-left: -6px;
    margin-top: -6px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: max-content;
  height: max-content;
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
