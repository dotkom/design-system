import React, { FC } from 'react';

export interface TabProps {
  title: string;
}

const Tab: FC<TabProps> = ({ children }) => <>{children}</>;

export default Tab;
