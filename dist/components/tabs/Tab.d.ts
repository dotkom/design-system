import React, { FC } from 'react';
export interface TabProps {
    title: string;
    children: React.ReactNode;
}
declare const Tab: FC<TabProps>;
export default Tab;
