import styled from 'styled-components';
import { colors } from 'common/colors';

const Select = styled.select`
  transition: all 0.2s;

  padding: 8px 28px 8px 8px;
  background: #fff;
  border-radius: 3px;
  border: 1px solid ${colors.grayLighten90};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  cursor: pointer;

  &:hover {
    border-color: ${colors.primaryLighten45};
  }
  appearance: none;

  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" width="0.8em" height="0.8em" fill="%23bbb"%3E%3Cpath d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"%3E%3C/path%3E%3C/svg%3E');
  background-position: right 5px center;
  background-repeat: no-repeat;
`;

export default Select;
