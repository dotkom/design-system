import React from 'react';
import styled, { StyledComponentProps } from 'styled-components';
import { colors } from 'common/colors';

interface LinkProps extends StyledComponentProps<'a', any, any, any> {
  href: string;
  underline?: boolean;
  children: string;
}

interface StyledLinkProps {
  underline?: boolean;
}

const StyledLink = styled.a<StyledLinkProps>`
  color: ${colors.primary};
  display: inline-block;

  &:hover {
    color: ${colors.primaryLight};
  }

  ${(props) =>
    props.underline &&
    `
    text-decoration: underline;
  `}
`;

const Link = ({ underline, href, children }: LinkProps) => {
  return (
    <StyledLink underline={underline} href={href}>
      {children}
    </StyledLink>
  );
};

export default Link;
