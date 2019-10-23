import React from 'react';
import styled, { StyledComponentProps } from 'styled-components';

interface IconProps extends StyledComponentProps<'i', any, any, any> {
  icon: string;
  color: string;
  type?: 'outlined' | 'two-tone' | 'round' | 'sharp';
  size: 'small' | 'medium' | 'large' | 'huge';
}

interface StyledIconProps {
  color: string;
}

const StyledIcon = styled.i<StyledIconProps>`
  color: ${(props): string => props.color};
`;

const iconSizeEnum = {
  small: '18',
  medium: '24',
  large: '36',
  huge: '48',
};

const Icon = ({ icon, type, color, size }: IconProps): JSX.Element => {
  const iconType = (): string => {
    let base = 'material-icons';
    if (type) {
      return `${base}-${type}`;
    }
    return base;
  };

  const iconSize = (): string => {
    return `md-${iconSizeEnum[size]}`;
  };

  return (
    <StyledIcon color={color} className={`${iconType()} ${iconSize()}`}>
      {icon}
    </StyledIcon>
  );
};

export default Icon;
