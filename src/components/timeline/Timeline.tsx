import React from 'react';

interface TimelineProps {
  children: React.ReactNode;
}

const Timeline = ({ children }: TimelineProps) => {
  return (
    <>
      <div className="cal-timeline" />
      {children}
    </>
  );
};

export default Timeline;
