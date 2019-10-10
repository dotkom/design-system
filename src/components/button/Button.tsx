import React from 'react';
import styled, { StyledComponentProps } from 'styled-components';
import { colors } from 'common/colors';

// Temporary until the Icon component is done
class Icon {}

interface ButtonProps extends StyledComponentProps<'button', any, any, any> {
  children?: React.ReactNode;
  icon?: string | Icon;
  color?: 'primary' | 'secondary' | 'success' | 'danger';
  variant?: 'normal' | 'flat' | 'inverted';
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
    outline: none;
    box-shadow: 0 2px 4px ${(props) => props.boxShadow}, 0 0 0 4px #fff8, 0 0 0 4px ${(props) => props.mainColor};
  }

  &:hover {
    background-image: linear-gradient(0, #0001 0, #0001 0);
  }

  &:disabled {
    background-color: ${colors.grayslightGray};
    color: ${colors.graysDarkGray};
    border: none;
  }
`;

const Button = ({
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
    backgroundColor: mainColor,
    borderColor: mainColor,
    textColor: colors.graysWhite,
    mainColor,
    boxShadow: disabled ? 'transparent' : 'rgba(0, 0, 0, 0.1)',
  };
  switch (variant) {
    case 'flat': {
      extraProps.backgroundColor = 'transparent';
      extraProps.borderColor = 'transparent';
      extraProps.textColor = mainColor;
      extraProps.boxShadow = 'transparent';
      break;
    }
    case 'inverted': {
      extraProps.backgroundColor = colors.graysWhite;
      extraProps.textColor = mainColor;
      break;
    }
  }
  return (
    <StyledButton {...props} {...extraProps}>
      {children}
    </StyledButton>
  );
};

export default Button;
