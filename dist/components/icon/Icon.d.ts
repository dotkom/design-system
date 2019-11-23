/// <reference types="react" />
import { StyledComponentProps } from 'styled-components';
interface IconProps extends StyledComponentProps<'i', any, any, any> {
    name: string;
}
declare const Icon: ({ name }: IconProps) => JSX.Element;
export default Icon;
