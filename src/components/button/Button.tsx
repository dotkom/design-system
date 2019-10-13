import React from 'react';
import styled, { StyledComponentProps } from 'styled-components';
import { colors } from 'common/colors';

// Temporary until the Icon component is done
class Icon {}

interface ButtonProps extends StyledComponentProps<'button', any, any, any> {
  value?: React.ReactNode;
  icon?: string | Icon;
  color?: 'primary' | 'secondary' | 'success' | 'danger';
  variant?: 'normal' | 'outline';
}

interface StyledButtonProps {
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  disabled?: boolean;
  mainColor?: string;
  boxShadow?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  appearance: none;
  background: ${(props) => props.backgroundColor};
  box-shadow: 0 2px 4px ${(props) => props.boxShadow};
  color: ${(props) => props.textColor};
  border-radius: 3px;
  padding: 1em 2em;
  margin: 4px;
  text-transform: uppercase;
  font-weight: bold;
  min-width: 160px;
  border: 2px solid ${(props) => props.borderColor};
  cursor: pointer;

  &:focus {
    /* Not sure if this is what we want on focus. We should probably handle focus selectors elsewhere */
    outline: none;
    box-shadow: 0 2px 4px ${(props) => props.boxShadow}, 0 0 0 4px #fff8, 0 0 0 4px ${(props) => props.mainColor};
  }

  &:hover {
    background-image: linear-gradient(0, #0001 0, #0001 0);
  }

  &:disabled {
    background: ${colors.grayslightGray};
    color: ${colors.graysGray};
    border: none;
  }
`;

const Button = ({
  value = '',
  children = null,
  color = 'primary',
  variant = 'normal',
  disabled = false,
  ...props
}: ButtonProps) => {
  let mainColor: string = colors.primary;
  switch (color) {
    case 'secondary': {
      mainColor = colors.accent;
      break;
    }
    case 'success': {
      mainColor = colors.systemSuccess;
      break;
    }
    case 'danger': {
      mainColor = colors.systemError;
      break;
    }
  }

  const extraProps = {
    backgroundColor: disabled ? '#0001' : mainColor,
    borderColor: disabled ? 'transparent' : mainColor,
    textColor: colors.graysWhite,
    mainColor,
    disabled,
    boxShadow: disabled ? 'transparent' : 'rgba(0, 0, 0, 0.1)',
  };
  switch (variant) {
    case 'outline': {
      extraProps.backgroundColor = colors.graysWhite;
      extraProps.textColor = mainColor;
      break;
    }
  }
  return (
    <StyledButton {...props} {...extraProps}>
      {children || value}
    </StyledButton>
  );
};

export default Button;

/*

// From branch: buttons

import * as React from 'react';
import styled, { css } from 'styled-components';
import { colors } from 'common/colors';

interface ButtonProps {
  value: string;
  variation?: 'default' | 'outline' | 'contrast' | 'positive' | 'negative';
}

const Button = ({ value, variation = 'default' }: ButtonProps) => {
  return <StyledButton variation={variation}>{value}</StyledButton>;
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
*/
