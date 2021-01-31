import React, { FC } from 'react';

export interface TabProps {
  title: string;
  children: React.ReactNode;
}

const Tab: FC<TabProps> = ({ children }: TabProps) => <>{children}</>;

export default Tab;
