import React from 'react';
import styled from 'styled-components';

interface EventProps {
  title: string;
  startTime: string;
  endTime: string;
  children: React.ReactNode;
  eventClickHandler: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  index: number;
  active: boolean;
}

const Event = ({ title, startTime, endTime, children, eventClickHandler, index, active }: EventProps): JSX.Element => {
  // const classes = index === active ? 'cal-event-content-active' : '';
  console.log(active);

  const classes = '';
  console.log(index);
  return (
    <StyledEvent>
      <EventHeader onClick={eventClickHandler}>
        <EventTime>{startTime}</EventTime>
        <EventIndicator className="indicator" />
        <EventTitle>{title}</EventTitle>
      </EventHeader>

      <EventBody hide={!active}>
        <EventInnerContent>{children}</EventInnerContent>
        <EventEndTime className={classes}>Antatt sluttidspunkt: {endTime}</EventEndTime>
      </EventBody>
    </StyledEvent>
  );
};

export default Event;

const StyledEvent = styled.div`
  &:hover {
    .indicator {
      background-color: orange;
    }
  }
`;

const EventTitle = styled.h3`
  font-weight: bold;
  border-left: 1px solid black;
  padding: 16px 0 16px 45px;
`;

const EventHeader = styled.div`
  display: flex;
  position: relative;
  h3 {
    margin: 0px;
  }
`;

const EventTime = styled.h3`
  padding: 16px 30px 16px 0;
`;

const EventEndTime = styled.p`
  font-size: 14px;
  text-decoration: underline;
  padding-top: 16px;
`;

const EventBody = styled.div<{ hide?: boolean }>`
  border-left: 1px solid black;
  padding-left: 45px;
  margin-left: 90px;
  max-width: 670px;

  ${({ hide }) =>
    hide &&
    `
    display: none;
  `}
`;

const EventInnerContent = styled.div`
  border-bottom: 1px solid transparent;

  & > * + * {
    margin: 16px 0;
  }
`;

const EventIndicator = styled.div`
  position: absolute;
  left: 83px;
  top: 20px;
  background-color: black;
  border-radius: 50%;
  width: 14px;
  height: 14px;
`;
