/// <reference types="react" />
import { StyledComponentProps } from 'styled-components';
interface LinkProps extends StyledComponentProps<'a', any, any, any> {
    href: string;
    underline?: boolean;
    children: string;
}
declare const Link: ({ href, underline, children }: LinkProps) => JSX.Element;
export default Link;
