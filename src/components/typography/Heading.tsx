import React from 'react';
import styled, { StyledComponentProps, css } from 'styled-components';
import { colors } from 'common/colors';

type HeaderProps = StyledComponentProps<'h1', any, any, any>;

const HeadingStyle = css`
  color: ${colors.grayDarken90};
`;

const StyledH1 = styled.h1`
  ${HeadingStyle}
`;
const StyledH2 = styled.h2`
  ${HeadingStyle}
`;
const StyledH3 = styled.h3`
  ${HeadingStyle}
`;

export const Heading = ({ children, ...props }: HeaderProps): JSX.Element => {
  return <StyledH1 {...props}>{children}</StyledH1>;
};

export const Heading2 = ({ children, ...props }: HeaderProps): JSX.Element => {
  return <StyledH2 {...props}>{children}</StyledH2>;
};

export const Heading3 = ({ children, ...props }: HeaderProps): JSX.Element => {
  return <StyledH3 {...props}>{children}</StyledH3>;
};
