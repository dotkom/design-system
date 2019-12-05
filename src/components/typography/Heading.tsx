import styled, { css } from 'styled-components';
import { colors } from 'common/colors';

const HeadingStyle = css`
  color: ${colors.grayDarken90};
`;

const Heading = styled.h1`
  ${HeadingStyle}
`;
const Heading2 = styled.h2`
  ${HeadingStyle}
`;
const Heading3 = styled.h3`
  ${HeadingStyle}
`;
const Heading4 = styled.h4`
  ${HeadingStyle}
`;
const Heading5 = styled.h5`
  ${HeadingStyle}
`;
const Heading6 = styled.h6`
  ${HeadingStyle}
`;

export {
  Heading,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
};
