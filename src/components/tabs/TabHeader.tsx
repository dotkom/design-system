import { HTMLProps } from 'react';
import styled from 'styled-components';
import { colors } from 'common/colors';

interface Props extends HTMLProps<HTMLInputElement> {
  selected?: boolean;
  tab: number;
}

const TabHeader = styled.div<Props>`
  color: ${({ selected }) => selected && colors.primaryLight};
  padding: 10px 30px;
  cursor: pointer;

  &:not(:first-child) {
    border-left: none;
  }
`;

export default TabHeader;
