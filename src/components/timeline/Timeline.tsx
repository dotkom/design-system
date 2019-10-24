import React from 'react';
// import styled from 'styled-components';

interface TimelineProps {
  children: React.ReactNode;
}

const Timeline = ({ children }: TimelineProps) => {
  return (
    <>
      {/* <Line /> */}
      {children}
    </>
  );
};

// const Line = styled.div`
//   position: absolute;
//   top: 110px;
//   bottom: 65px;
//   left: 290px;

//   background-color: #000;
//   width: 1px;
// `;

export default Timeline;
