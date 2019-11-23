import React from 'react';
interface EventProps {
    title: string;
    startTime: string;
    endTime: string;
    children: React.ReactNode;
}
declare const Event: ({ title, startTime, endTime, children }: EventProps) => JSX.Element;
export default Event;
