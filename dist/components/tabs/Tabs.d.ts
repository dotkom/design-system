import { FC, ReactElement } from 'react';
import { TabProps } from './Tab';
declare type TabElement = ReactElement<TabProps>;
interface Props {
    children: TabElement[] | TabElement;
}
declare const Tabs: FC<Props>;
export default Tabs;
