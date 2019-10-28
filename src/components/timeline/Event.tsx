import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from 'common/colors';

interface EventProps {
  title: string;
  startTime: string;
  endTime: string;
  children: React.ReactNode;
}

const Event = ({ title, startTime, endTime, children }: EventProps): JSX.Element => {
  const [expanded, setExpanded] = useState(false);
  const [highlighted, setHighlighted] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledEvent onMouseOver={() => setHighlighted(true)} onMouseLeave={() => setHighlighted(false)}>
      <EventHeader onClick={toggleExpanded}>
        <EventTime>{startTime}</EventTime>
        {/* <EventIndicator className="indicator" /> */}
        <EventTitle highlighted={highlighted}>{title}</EventTitle>
      </EventHeader>

      <EventBody hide={!expanded}>
        <EventInnerContent>{children}</EventInnerContent>
        <EventEndTime>Antatt sluttidspunkt: {endTime}</EventEndTime>
      </EventBody>
    </StyledEvent>
  );
};

export default Event;

const StyledEvent = styled.div``;

const EventTitle = styled.h3<{ highlighted: boolean }>`
  position: relative;
  font-weight: bold;
  border-left: 1px solid ${colors.black};
  padding: 16px 0 16px 45px;

  &::before {
    content: '';
    display: inline-block;
    background-color: ${({ highlighted }) => (highlighted ? colors.secondary : colors.black)};
    border-radius: 50%;
    width: 15px;
    height: 15px;
    position: absolute;
    left: 0;
    transform: translateX(-50%);
  }
  &:hover {
    &::before {
      background-color: orange;
    }
  }
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
  text-decoration: underline;
  padding-top: 16px;
`;

const EventBody = styled.div<{ hide?: boolean }>`
  border-left: 1px solid ${colors.black};
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
  & > * + * {
    margin: 16px 0;
  }
`;

// const EventIndicator = styled.div`
//   position: absolute;
//   left: 83px;
//   top: 20px;
//   background-color: ${colors.black};
//   border-radius: 50%;
//   width: 14px;
//   height: 14px;
// `;
