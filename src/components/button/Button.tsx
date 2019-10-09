import * as React from 'react';
import styled, { css } from 'styled-components';
import { colors } from 'common/colors';

interface ButtonProps {
  text: string;
  variation?: 'default' | 'outline' | 'contrast' | 'positive' | 'negative';
}

const Button = ({ text, variation = 'default' }: ButtonProps) => {
  return <StyledButton variation={variation}>{text}</StyledButton>;
};

export default Button;

const DefaultButton = css`
  background: ${colors.primary};

  &:hover {
    background: ${colors.primaryLight};
  }
`;

const OutlineButton = css`
  background: #fff;
  color: ${colors.primaryDark};
  border: 2px solid ${colors.primary};

  &:hover {
    color: white;
    background: ${colors.primary};
  }
`;

const ContrastButton = css`
  background: transparent;
  border: 2px solid white;

  &:hover {
    color: ${colors.accent};
    border-color: ${colors.accent};
  }
`;

const PositiveButton = css`
  background: ${colors.systemSuccess};

  &:hover {
    background: ${colors.systemSuccess50};
  }
`;

const NegativeButton = css`
  background: ${colors.systemError};

  &:hover {
    background: ${colors.systemError50};
  }
`;

const StyledButton = styled.button<{ variation?: string }>`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border 0.2s;

  color: white;

  ${({ variation }) =>
    variation == 'default'
      ? DefaultButton
      : variation == 'outline'
      ? OutlineButton
      : variation == 'contrast'
      ? ContrastButton
      : variation == 'positive'
      ? PositiveButton
      : variation == 'negative'
      ? NegativeButton
      : ''}
`;
