import * as React from 'react';
interface CardProps {
    children: React.ReactNode;
    [name: string]: any;
}
declare const Card: ({ children, ...props }: CardProps) => JSX.Element;
export default Card;
