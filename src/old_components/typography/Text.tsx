import React, { FC } from 'react';
import styled, { StyledComponentProps, css } from 'styled-components';

interface QuoteProps extends StyledComponentProps<'blockquote', any, any, any> {
  by?: string;
}

const TextStyle = css`
  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Info = styled.p`
  font-size: var(--font-size-sm);
  ${TextStyle}
`;

export const Ingress = styled.p`
  font-size: var(--font-size-md);
  margin: 2rem 0;
  font-style: italic;
  ${TextStyle}
`;

export const Paragraph = styled.p`
  font-size: var(--font-size-md);
  margin: 2rem 0;
  ${TextStyle}
`;

const StyledQuote = styled.blockquote`
  font-size: var(--font-size-lg);
  margin: 2rem 0;
  ${TextStyle}

  & > p {
    margin: 0;
    display: inline;
    font-size: var(--font-size-lg);
  }
`;

export const Quote: FC<QuoteProps> = ({ children, by = '', ...props }: QuoteProps): JSX.Element => {
  let source = null;
  let quote = children;
  if (by) {
    source = by;
  } else if (typeof quote !== 'string' && children && quote.length && quote.slice(-1)[0].props.children) {
    // Check if there are any source on the quote
    let sourceChildren = quote.slice(-1)[0].props.children;
    if (typeof sourceChildren === 'string') {
      sourceChildren = [sourceChildren];
    }
    if (sourceChildren[0].indexOf('-- ') === 0) {
      // Get the source from markdown quote
      source = sourceChildren.map((e: JSX.Element | string, i: number) =>
        i === 0 && typeof e === 'string' ? e.replace(/^-- /, '') : e
      );

      // Remove source from quote
      quote = quote.slice(0, -1);
    }
  }
  return (
    <StyledQuote {...props}>
      «{quote}» {source}
    </StyledQuote>
  );
};
