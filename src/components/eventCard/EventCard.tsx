import React from 'react';
import styled from 'styled-components';
import { colors } from 'common/colors';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

interface ICard {
  eventName: string;
  eventColor: string;
  date: string;
  attending: string;
}

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  min-height: 4rem;
  width: 100%;
`;

const ColorCodeIndicator = styled.span<{ color?: string }>`
  display: inline-block;
  background: ${({ color }) => color || colors.primay};
  width: 7px;
  min-height: calc(4rem - 20px);
  margin: 10px 0;
  border-radius: 2px;
`;

const Text = styled.p`
  display: inline;
  margin-left: 5px;
`;

const Box = styled.span`
  display: inline-flex;
  align-items: center;
  margin: 0 15px;

  &:first-child {
    margin-right: auto;
  }
`;

const EventCard = ({ eventName, eventColor, date, attending }: ICard) => (
  <CardContainer>
    <Box>
      <ColorCodeIndicator color={eventColor}></ColorCodeIndicator>
      <Text>{eventName}</Text>
    </Box>
    <Box>
      <DateRangeIcon />
      <Text>{date}</Text>
    </Box>
    <Box>
      <PermIdentityIcon />
      <Text>{attending}</Text>
    </Box>
  </CardContainer>
);

export default EventCard;
