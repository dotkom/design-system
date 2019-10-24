import React from 'react';

interface EventProps {
  title: string;
  startTime: string;
  endTime: string;
  children: React.ReactNode;
  eventClickHandler: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  index: number;
  active: number;
}

const Event = ({ title, startTime, endTime, children, eventClickHandler, index, active }: EventProps): JSX.Element => {
  const classes = index === active ? 'cal-event-content-active' : '';

  return (
    <div className="cal-event" id={`event-${index}`}>
      <div className="cal-event-indicator"></div>

      <div onClick={eventClickHandler} className="cal-event-header">
        <p className="cal-event-date">{startTime}</p>
        <h3 className="cal-event-title">{title}</h3>
      </div>

      <span className={`cal-event-content ${classes}`}>{children}</span>
      <p className={`cal-event-content ${classes} cal-event-endtime`}>Antatt sluttidspunkt: {endTime}</p>
    </div>
  );
};

export default Event;
