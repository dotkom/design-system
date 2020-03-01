import React from 'react';
import MarkdownToJSX, { MarkdownOptions } from 'markdown-to-jsx';
import { Heading, Heading2, Heading3, Heading4, Heading5, Heading6 } from './Heading';
import { Paragraph, Quote } from './Text';

interface MarkdownProps {
  children: string;
  options?: MarkdownOptions;
}

export const Markdown = ({ children, options = {} }: MarkdownProps): JSX.Element => {
  return (
    <MarkdownToJSX
      options={{
        overrides: {
          h1: { component: Heading },
          h2: { component: Heading2 },
          h3: { component: Heading3 },
          h4: { component: Heading4 },
          h5: { component: Heading5 },
          h6: { component: Heading6 },
          p: { component: Paragraph },
          blockquote: { component: Quote },
        },
        ...options,
      }}
    >
      {children}
    </MarkdownToJSX>
  );
};

export const md = (literals: TemplateStringsArray, ...placeholders: string[]): JSX.Element => {
  const result: string[] = [];
  for (let i = 0; i < placeholders.length; i++) {
    result.push(literals[i]);
    result.push(placeholders[i]);
  }
  result.push(literals[literals.length - 1]);
  return <Markdown>{result.join('')}</Markdown>;
};
