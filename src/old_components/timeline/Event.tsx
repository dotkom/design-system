import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from 'common/colors';

interface EventProps {
  title: string;
  startTime: string;
  endTime: string;
  children: React.ReactNode;
}

const Event = ({ title, startTime, endTime, children }: EventProps) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledEvent>
      <EventHeader onClick={toggleExpanded}>
        <EventTime>{startTime}</EventTime>
        <EventTitle>{title}</EventTitle>
      </EventHeader>

      <EventBody hide={!expanded}>
        <EventInnerContent>{children}</EventInnerContent>
        <EventEndTime>Antatt sluttidspunkt: {endTime}</EventEndTime>
      </EventBody>
    </StyledEvent>
  );
};

export default Event;

const widthTime = '5rem';

const StyledEvent = styled.div``;

const EventTitle = styled.h3`
  position: relative;
  padding: 1rem 0 1rem 2rem;

  &::before {
    content: '';
    display: inline-block;
    background-color: ${colors.primary};
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);

    ${StyledEvent}:hover & {
      background-color: ${colors.secondary};
    }
  }
`;

const EventHeader = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
`;

const EventTime = styled.h3`
  padding: 1rem 0;
  width: ${widthTime};
`;

const EventEndTime = styled.p`
  text-decoration: underline;
  margin-top: 1rem;
`;

const EventBody = styled.div<{ hide?: boolean }>`
  padding: 0.5rem 2rem 1rem;
  margin-left: ${widthTime};
  max-width: 670px;
  line-height: 1.25;

  ${({ hide }) =>
    hide &&
    `
    display: none;
  `};
`;

const EventInnerContent = styled.div`
  & > * + * {
    margin-top: 1rem;
  }
`;
