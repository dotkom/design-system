import React, { FC } from 'react';
import styled, { StyledComponentProps, css } from 'styled-components';
import { colors } from 'common/colors';
import { Icon } from '../../';

type TextProps = StyledComponentProps<'p', any, any, any>;
interface QuoteProps extends StyledComponentProps<'blockquote', any, any, any> {
  by?: string;
}

const TextStyle = css`
  color: ${colors.grayDarken90};
  line-height: 1.5;
`;

const StyledInfo = styled.p`
  font-size: var(--font-size-sm);
  ${TextStyle}
  color: ${colors.grayDarken60};
`;
const StyledIngress = styled.p`
  font-size: var(--font-size-md);
  margin: 2rem 0;
  font-style: italic;
  ${TextStyle}
`;
const StyledParagraph = styled.p`
  font-size: var(--font-size-md);
  margin: 2rem 0;
  ${TextStyle}
`;
const StyledQuote = styled.blockquote`
  font-size: var(--font-size-lg);
  font-style: italic;
  text-align: center;
  margin: 2rem 0;
  ${TextStyle}

  & > p {
    margin: 0;
    display: inline;
    font-size: var(--font-size-lg);
  }
`;

const RotatedQuotationMark = styled(Icon)`
  transform: rotate(180deg);
  vertical-align: top;
`;

const StyledQuotedBy = styled.span`
  color: ${colors.grayDarken60};
  float: right;
  font-size: var(--font-size-md);

  &::before {
    content: '- ';
  }
`;

export const Ingress = ({ children, ...props }: TextProps): JSX.Element => {
  return <StyledIngress {...props}>{children}</StyledIngress>;
};

export const Paragraph = ({ children, ...props }: TextProps): JSX.Element => {
  return <StyledParagraph {...props}>{children}</StyledParagraph>;
};

export const Quote: FC<QuoteProps> = ({ children, by = '', ...props }: QuoteProps): JSX.Element => {
  let source = null;
  let quote = children;
  if (by) {
    source = by;
  } else if (typeof quote !== 'string' && children && quote.length && quote.slice(-1)[0].props.children) {
    // Check if there are any source on the quote
    if (quote.slice(-1)[0].props.children[0].indexOf('-- ') === 0) {
      // Get the source from markdown quote
      source = quote
        .slice(-1)[0]
        .props.children.map((e: JSX.Element | string, i: number) =>
          i === 0 && typeof e === 'string' ? e.replace(/^-- /, '') : e
        );

      // Remove source from quote
      quote = quote.slice(0, -1);
    }
  }
  return (
    <StyledQuote {...props}>
      <RotatedQuotationMark name="format_quote" />
      {quote}
      <Icon name="format_quote" />
      {source ? (
        <>
          <br />
          <StyledQuotedBy>{source}</StyledQuotedBy>
        </>
      ) : (
        ''
      )}
    </StyledQuote>
  );
};

export const Info = ({ children, ...props }: TextProps): JSX.Element => {
  return <StyledInfo {...props}>{children}</StyledInfo>;
};
