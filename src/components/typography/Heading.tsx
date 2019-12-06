import styled, { css } from 'styled-components';
import { colors } from 'common/colors';

const HeadingStyle = css`
  color: ${colors.grayDarken90};
  margin: 4rem 0 2rem;
  line-height: 1.5;

  &:first-child {
    margin-top: 0;
  }
`;

const Heading = styled.h1`
  font-size: var(--font-size-xl);
  ${HeadingStyle}
`;
const Heading2 = styled.h2`
  font-size: var(--font-size-lg);
  ${HeadingStyle}
`;
const Heading3 = styled.h3`
  font-size: var(--font-size-md);
  ${HeadingStyle}
`;
const Heading4 = styled.h4`
  font-size: var(--font-size-sm);
  ${HeadingStyle}
`;
const Heading5 = styled.h5`
  font-size: var(--font-size-xs);
  ${HeadingStyle}
`;
const Heading6 = styled.h6`
  font-size: var(--font-size-xxs);
  ${HeadingStyle}
`;

export { Heading, Heading2, Heading3, Heading4, Heading5, Heading6 };
