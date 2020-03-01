import * as React from 'react';
import styled from 'styled-components';

interface CardProps {
  children: React.ReactNode;
  [name: string]: any;
}

const StyledCard = styled.div`
  display: inline-block;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  padding: 1rem;
`;

const Card = ({ children, ...props }: CardProps) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};

export default Card;
