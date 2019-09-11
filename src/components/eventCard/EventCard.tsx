import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from 'common/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far } from "@fortawesome/free-regular-svg-icons";
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

type ErrorFunction = (input: string) => string;
type ErrorMessage = string | ErrorFunction;

interface ICard {
  type: string;
  disabled?: boolean;
  errorMessage?: ErrorMessage;
  [props: string]: any;
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  background: pink;
  min-height: 4rem;
  width: 100%;
`;

const ColorCodeIndicator = styled.span<{ color?: string }>`
  background: ${({ color }) => color || colors.primay};
  width: 7px;
  min-height: calc(4rem - 20px);
  margin: 10px 0 10px 8px;
  border-radius: 2px;
`;

const CardText = styled.p<{ color?: string }>`
  font: inherit;
  line-height: 1.5;
  margin-left: 5px;
  font-size: 1.2em;
  color: ${({ color }) => color || colors.graysBlack};

  &:empty {
    margin: 0;
  }
`;

const Date = styled.p<{ color?: string }>`
  color: ${({ color }) => color};

  &:empty {
    display: none;
  }
`;

const EventCard = ({
  eventName = '',
  labelColor = '',
  eventColor = '',
  errorMessage = '',
  defaultValue = '',
}: ICard) => {
  const [value] = useState(defaultValue);

  return (
    <CardContainer>
      <ColorCodeIndicator color={eventColor}></ColorCodeIndicator>
      <CardText color={labelColor}>{eventName}</CardText>
      <FontAwesomeIcon icon={['far', 'faCalendarAlt']} />
      <Date>{typeof errorMessage === 'function' ? errorMessage(value) : errorMessage}</Date>
    </CardContainer>
  );
};

export default EventCard;
