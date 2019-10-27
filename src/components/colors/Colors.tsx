import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'common/colors';

type ColorStrings = keyof typeof colors;

interface ColorSwatchProps {
  color: ColorStrings;
  darkText?: boolean;
}

const StyledColor = styled.div<{ color: ColorStrings; darkText: boolean }>`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  line-height: 1.5;
  background: ${({ color }): string => colors[color]};
  border: 2px solid ${({ color }): string => colors[color]};
  color: ${({ darkText }): string => (darkText ? colors.black : colors.white)};
  width: 100%;
  padding: 1rem;
  transition: background 0.2s ease-out, color 0.2s;

  &:hover {
    border-color: ${({ darkText }): string => (darkText ? colors.black : colors.white)};
  }
`;

const ColorSwatch = ({ color, darkText = false }: ColorSwatchProps): JSX.Element => {
  return (
    <StyledColor color={color} darkText={darkText}>
      <span>{color}</span>
      <span>{colors[color]}</span>
    </StyledColor>
  );
};

export default ColorSwatch;
