import React from 'react';
import styled from 'styled-components';

interface DayProps {
  children: React.ReactNode;
  day: string;
}

const Day = ({ children, day }: DayProps): JSX.Element => {
  return (
    <div className="cal-day">
      <DayString>{day}</DayString>
      {children}
      <br />
    </div>
  );
};

export default Day;

const DayString = styled.h2`
  color: #f9a11b;
  font-weight: 400;

  &::first-letter {
    text-transform: uppercase;
  }
`;
