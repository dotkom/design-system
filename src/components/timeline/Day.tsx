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
      <StyledDayBody>{children}</StyledDayBody>
    </StyledDay>
  );
};

export default Day;

const StyledDay = styled.div`
  &:not(:first-child) {
    margin-top: 1rem;
  }

  @media ${media.desktopAndUp} {
    display: flex;
  }
`;

const DayString = styled.h2`
  color: ${colors.primaryDarken15};
  font-size: 1.25rem;
  margin: 0;
  padding: 1rem 2rem 1rem 0;
  width: 275px;
  white-space: nowrap;
  &::first-letter {
    text-transform: uppercase;
  }
`;

const StyledDayBody = styled.div`
  position: relative;

  &::before {
    content: '';
    display: block;
    background: ${colors.primary};
    width: 2px;
    height: calc(100% - 3.1rem);
    top: 1.5rem;
    position: absolute;
    left: calc(5rem - 1px);
  }
`;
