import React from 'react';
import styled, { css, StyledComponentProps } from 'styled-components';
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
  position: relative;
  text-decoration: none;
  color: ${colors.primary};
  transition: color 0.1s;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background: ${colors.primary};
    bottom: 0;
    left: 0;
    transition: transform 0.1s, color 0.1s;
    ${(props) =>
      !props.underline &&
      css`
        transform: scaleX(0);
      `}
  }

  &:hover,
  &:focus {
    outline: none;
    color: ${colors.primaryDarken45};

    &::after {
      transform: scaleX(1);
      background: ${colors.primaryDarken45};
    }
  }
`;

const Link = ({ href, underline = false, children }: LinkProps): JSX.Element => {
  return (
    <StyledLink href={href} underline={underline}>
      {children}
    </StyledLink>
  );
};

export default Link;
