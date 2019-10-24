import React from 'react';

interface DayProps {
  children: React.ReactNode;
  day: string;
}

const Day = ({ children, day }: DayProps): JSX.Element => {
  return (
    <div className="cal-day">
      <h2 className="cal-day--string">{day}</h2>
      {children}
      <br />
    </div>
  );
};

export default Day;
