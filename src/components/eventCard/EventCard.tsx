import React from 'react';
import styled from 'styled-components';
import { colors } from 'common/colors';
import Icon from 'components/icon/Icon';
import Card from 'components/card/Card';

interface ICard {
  eventName: string;
  eventColor: string;
  date: string;
  attending: string;
  imgSrc: string;
  isLargeEvent: boolean;
  category: string;
}

const EventInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  min-height: 4rem;
  width: 100%;
  border-radius: 3px;
  background: #fff;
`;

const ColorCodeIndicator = styled.span<{ color?: string }>`
  display: inline-block;
  background: ${({ color }) => color || colors.primary};
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

const Picture = styled.img<{ hidden: boolean }>`
  width: 100%;
  border-bottom: 0.5px solid #b7b7b7;
  &:hidden {
    display: none;
  }
`;

const CategoryInfo = styled.h2<{ color?: string; hidden: boolean }>`
  background: ${({ color }) => color || colors.primary};
  color: #fff;
  margin: 0;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  padding: 7px 0;
  text-align: center;
  font-size: 20px;
  font-weight: 200;
  letter-spacing: 1px;
  &:hidden {
    display: none;
  }
`;

const EventCard = ({ eventName, eventColor, date, attending, imgSrc = '', isLargeEvent, category }: ICard) => (
  <Card padding={false}>
    <CategoryInfo color={eventColor} hidden={!isLargeEvent}>
      {category}
    </CategoryInfo>
    <Picture src={imgSrc} hidden={!isLargeEvent}></Picture>
    <EventInfo>
      <Box>
        <ColorCodeIndicator color={eventColor}></ColorCodeIndicator>
        <Text>{eventName}</Text>
      </Box>
      <Box>
        <Icon name="date_range" />
        <Text>{date}</Text>
      </Box>
      <Box>
        <Icon name="perm_identity" />
        <Text>{attending}</Text>
      </Box>
    </EventInfo>
  </Card>
);

export default EventCard;
