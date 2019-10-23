import React from 'react';
import styled, { StyledComponentProps, css } from 'styled-components';
import { colors } from 'common/colors';

interface TextProps extends StyledComponentProps<'p', any, any, any> {}

const TextStyle = css`
  color: ${colors.graysBlack};
`;

const StyledInfo = styled.p`
  font-size: var(--font-size-sm);
  ${TextStyle}
  color: ${colors.graysDarkGray};
`;
const StyledIngress = styled.p`
  font-size: var(--font-size-md);
  font-style: italic;
  ${TextStyle}
`;
const StyledBody = styled.p`
  font-size: var(--font-size-md);
  ${TextStyle}
`;

export const Ingress = ({ children, ...props }: TextProps): JSX.Element => {
  return <StyledIngress {...props}>{children}</StyledIngress>;
};

export const Body = ({ children, ...props }: TextProps): JSX.Element => {
  return <StyledBody {...props}>{children}</StyledBody>;
};

export const Info = ({ children, ...props }: TextProps): JSX.Element => {
  return <StyledInfo {...props}>{children}</StyledInfo>;
};
