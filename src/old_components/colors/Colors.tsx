import * as React from 'react';
import styled from 'styled-components';
import { colors, ColorName } from 'common/colors';

interface ColorSwatchProps {
  color: ColorName;
  darkText?: boolean;
}

const StyledColor = styled.div<{ color: ColorName; darkText: boolean }>`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: ${({ color }) => colors[color]};
  border: 2px solid ${({ color }) => colors[color]};
  color: ${({ darkText }) => (darkText ? colors.black : colors.white)};
  width: 100%;
  padding: 1rem;
  transition: background 0.2s ease-out, border-color 0.1s;

  &:hover {
    border-color: ${({ darkText }) => (darkText ? colors.black : colors.white)};
  }
`;

const ColorSwatch = ({ color, darkText = false }: ColorSwatchProps) => {
  return (
    <StyledColor color={color} darkText={darkText}>
      <span>{color}</span>
      <samp>{colors[color]}</samp>
    </StyledColor>
  );
};

export default ColorSwatch;
