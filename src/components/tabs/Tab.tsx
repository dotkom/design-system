import React, { FC, Fragment } from 'react';

export interface TabProps {
  title: string;
  children: React.ReactNode;
}

const Tab: FC<TabProps> = ({ children }: TabProps) => <Fragment>{children}</Fragment>;

export default Tab;
