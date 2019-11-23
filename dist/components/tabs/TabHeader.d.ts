import { HTMLProps } from 'react';
interface Props extends HTMLProps<HTMLInputElement> {
    selected?: boolean;
    tab: number;
}
declare const TabHeader: import("styled-components").StyledComponent<"div", any, Props, never>;
export default TabHeader;
