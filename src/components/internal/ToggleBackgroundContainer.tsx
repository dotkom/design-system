import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'common/colors';
import { useState } from 'react';
import Checkbox from '../checkbox/Checkbox';

interface ContrastProps {
  children: React.ReactNode;
  isDark?: boolean;
}

const StyledContainer = styled.div<{ contrast: boolean }>`
  display: block;
  width: fit-content;
  border-radius: 3px;
  border: 1px solid ${colors.grayslightGray};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  padding: 0.5rem;

  & > * {
    margin: 0.5rem;
  }

  background-image: linear-gradient(0, ${colors.primaryDark} 0, ${colors.primaryDark} 0);
  background-size: 100% 200%;
  background-position: ${({ contrast }) => !contrast && '0 '}-100%;
  background-repeat: no-repeat;
  transition: background 0.5s ease-in-out;
`;

const ToggleBackgroundContainer = ({ children, isDark = false }: ContrastProps) => {
  const [contrastTheme, useContrastTheme] = useState(isDark);
  return (
    <div>
      <Checkbox label="Dark background" isChecked={contrastTheme} onCheck={() => useContrastTheme(!contrastTheme)} />
      <StyledContainer contrast={contrastTheme}>{children}</StyledContainer>
    </div>
  );
};

export default ToggleBackgroundContainer;
