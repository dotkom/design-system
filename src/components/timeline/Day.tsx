import React from 'react';
import styled from 'styled-components';

interface DayProps {
  children: React.ReactNode;
  day: string;
}

const Day = ({ children, day }: DayProps): JSX.Element => {
  return (
    <StyledDay>
      <DayString>{day}</DayString>
      <div>{children}</div>
    </StyledDay>
  );
};

export default Day;

const StyledDay = styled.div`
  display: flex;
`;

const DayString = styled.h2`
  color: #f9a11b;
  font-weight: 400;
  font-size: 20px;
  margin: 0;
  padding: 15px 30px 0 0;
  width: 275px;
  white-space: nowrap;
  &::first-letter {
    text-transform: uppercase;
  }
`;
