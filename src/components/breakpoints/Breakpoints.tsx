import * as React from 'react';
import styled from 'styled-components';
import { media, breakPoints } from 'common/layout';

interface BreakpointsProps {
  children: React.ReactNode;
  [name: string]: any;
}

const StyledBreakpoints = styled.div`
  width: 100%;
  padding: 1em;

  @media ${media.tabletAndUp} {
    max-width: ${breakPoints.minTabletWidth};
  }

  @media ${media.desktopAndUp} {
    max-width: ${breakPoints.minDesktopWidth};
  }

  @media ${media.widescreenAndUp} {
    max-width: ${breakPoints.minWidescreenWidth};
  }
`;

const Breakpoints = ({ children, ...props }: BreakpointsProps) => {
  return <StyledBreakpoints {...props}>{children}</StyledBreakpoints>;
};

export default Breakpoints;
