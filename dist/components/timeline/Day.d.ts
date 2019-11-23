import React from 'react';
interface DayProps {
    children: React.ReactNode;
    day: string;
}
declare const Day: ({ children, day }: DayProps) => JSX.Element;
export default Day;
