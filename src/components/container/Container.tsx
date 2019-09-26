import * as React from 'react';
import styled from 'styled-components';
import { media, breakPoints } from '../shared/layout';

interface ContainerProps {
  children: string | JSX.Element | JSX.Element[];
  [name: string]: any;
}

const StyledContainer = styled.div`
  width: 100%;
  padding: 1em;

  @media ${media.tablet} {
    max-width: ${breakPoints.minTabletWidth};
  }

  @media ${media.smallDesktop} {
    max-width: ${breakPoints.minDesktopWidth};
  }

  @media ${media.largeDesktop} {
    max-width: ${breakPoints.minLargeDesktopWidth};
  }
`;

const Container = ({ children, ...props }: ContainerProps) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Container;
