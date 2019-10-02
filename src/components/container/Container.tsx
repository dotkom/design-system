import * as React from 'react';
import styled from 'styled-components';
import { media, breakPoints } from 'common/layout';

interface ContainerProps {
  children: React.ReactNode;
  [name: string]: any;
}

const StyledContainer = styled.div`
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

const Container = ({ children, ...props }: ContainerProps) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Container;
