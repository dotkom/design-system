import * as React from 'react';
import styled, { css } from 'styled-components';
import { colors } from 'common/colors';

interface CardProps {
  children: React.ReactNode;
  elevated?: boolean;
  padding?: boolean;
  [name: string]: any;
}

const StyledCard = styled.div<{ elevated: boolean; padding: boolean }>`
  display: inline-block;
  background: #fff;
  border: 1px solid ${colors.grayLighten60};

  ${(props) =>
    props.elevated &&
    css`
      border: none;
      border-radius: 3px;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    `}

  ${(props) =>
    props.padding &&
    css`
      padding: 1rem;
    `}
`;

const Card = ({ children, elevated = false, padding = true, ...props }: CardProps) => {
  return (
    <StyledCard elevated={elevated} padding={padding} {...props}>
      {children}
    </StyledCard>
  );
};

export default Card;
