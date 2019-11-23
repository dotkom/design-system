import React from 'react';
import { StyledComponentProps } from 'styled-components';
interface ButtonProps extends StyledComponentProps<'button', any, any, any> {
    value?: React.ReactNode;
    color?: 'primary' | 'secondary' | 'success' | 'danger';
    variant?: 'normal' | 'outline';
}
declare const Button: ({ value, children, color, variant, disabled, ...props }: ButtonProps) => JSX.Element;
export default Button;
