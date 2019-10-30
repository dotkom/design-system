import React from 'react';
import styled from 'styled-components';
import { colors } from 'common/colors';
import { media } from 'common/layout';

interface DayProps {
  children: React.ReactNode;
  day: string;
}

const Day = ({ children, day }: DayProps) => {
  return (
    <StyledDay>
      <DayString>{day}</DayString>
      <div>{children}</div>
    </StyledDay>
  );
};

export default Day;

const StyledDay = styled.div`
  @media ${media.desktopAndUp} {
    display: flex;
  }
`;

const DayString = styled.h2`
  color: ${colors.secondary};
  font-weight: normal;
  font-size: 20px;
  margin: 0;
  padding: 15px 30px 15px 0;
  width: 275px;
  white-space: nowrap;
  &::first-letter {
    text-transform: uppercase;
  }
`;
