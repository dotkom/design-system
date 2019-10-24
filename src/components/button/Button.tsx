import React from 'react';
import styled, { StyledComponentProps } from 'styled-components';
import { colors } from 'common/colors';

interface ButtonProps extends StyledComponentProps<'button', any, any, any> {
  value?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'success' | 'danger';
  variant?: 'normal' | 'outline';
}

interface StyledButtonProps {
  color: string;
  variant: string;
  disabled: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  appearance: none;
  background: ${(props): string => props.color};
  border: 2px solid ${(props): string => props.color};
  color: ${colors.graysWhite};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(0, #0001 0, #0001 0);
  }

  &:disabled {
    background: ${colors.grayslightGray};
    color: ${colors.graysGray};
    box-shadow: none;
    border-color: ${colors.grayslightGray};
    cursor: not-allowed;
  }

  ${(props): string | false =>
    props.variant == 'outline' &&
    `
    background: transparent;
    border: 2px solid ${props.color};
    color: ${props.color};
  `}
`;

const Button = ({
  value = '',
  children = null,
  color = 'primary',
  variant = 'normal',
  disabled = false,
  ...props
}: ButtonProps): JSX.Element => {
  let mainColor: string = colors.primary;
  switch (color) {
    case 'secondary': {
      mainColor = colors.secondary;
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
    color: mainColor,
    disabled,
    variant,
  };
  return (
    <StyledButton {...props} {...extraProps}>
      {children || value}
    </StyledButton>
  );
};

export default Button;
