import * as React from 'react';
import styled from 'styled-components';

interface CardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const StyledCard = styled.div`
  display: inline-block;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  padding: 1rem;
`;

const Card = ({ children, style }: CardProps) => {
  return <StyledCard style={style}>{children}</StyledCard>;
};

export default Card;
