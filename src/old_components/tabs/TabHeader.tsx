import { HTMLProps } from 'react';
import styled from 'styled-components';
import { colors } from 'common/colors';

interface Props extends HTMLProps<HTMLInputElement> {
  selected?: boolean;
  tab: number;
}

const TabHeader = styled.div<Props>`
  color: ${({ selected }) => (selected ? colors.primary : colors.grayDarken30)};
  padding: 10px 0;
  transition: color 0.2s;
  font-size: 1.5rem;
  cursor: ${({ selected }) => !selected && 'pointer'};

  &:not(:first-child) {
    border-left: none;
    margin-left: 20px;
  }

  &:hover {
    color: ${colors.primary};
  }
`;

export default TabHeader;
