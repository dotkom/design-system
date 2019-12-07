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
  font-size: var(--font-size-xxl);
  line-height: 6rem;
  ${HeadingStyle}
`;
const Heading2 = styled.h2`
  font-size: calc(var(--font-size-xxl) * 0.85);
  line-height: 3.75rem;
  ${HeadingStyle}
`;
const Heading3 = styled.h3`
  font-size: calc(var(--font-size-xxl) * 0.72);
  line-height: 3.125rem;
  ${HeadingStyle}
`;
const Heading4 = styled.h4`
  font-size: calc(var(--font-size-xxl) * 0.6);
  line-height: 2.5rem;
  ${HeadingStyle}
`;
const Heading5 = styled.h5`
  font-size: calc(var(--font-size-xxl) * 0.53);
  line-height: 2rem;
  ${HeadingStyle}
`;
const Heading6 = styled.h6`
  font-size: var(--font-size-md);
  line-height: 2rem;
  ${HeadingStyle}
`;

export { Heading, Heading2, Heading3, Heading4, Heading5, Heading6 };
