import React, { Fragment } from 'react';

interface TimelineProps {
  children: React.ReactNode;
}

const Timeline = ({ children }: TimelineProps) => {
  return <Fragment>{children}</Fragment>;
};

export default Timeline;
