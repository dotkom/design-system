import * as React from 'react';
interface BreakpointsProps {
    children: React.ReactNode;
    [name: string]: any;
}
declare const Breakpoints: ({ children, ...props }: BreakpointsProps) => JSX.Element;
export default Breakpoints;
