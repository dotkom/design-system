import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'common/colors';

interface CardProps {
  children: React.ReactNode;
  [name: string]: any;
}

const StyledCard = styled.div`
  display: block;
  background-color: ${colors.graysWhite};
  width: fit-content;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 1em;
`;

const Card = ({ children, ...props }: CardProps) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};

export default Card;
