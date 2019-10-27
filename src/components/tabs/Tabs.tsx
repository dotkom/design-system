import React, { useState, FC, ReactElement } from 'react';
import TabHeader from './TabHeader';
import TabSelect from './TabSelect';
import { TabProps } from './Tab';

type TabElement = ReactElement<TabProps>;

interface Props {
  children: TabElement[] | TabElement;
}

const Tabs: FC<Props> = ({ children }: Props) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <TabSelect activeTab={activeTab}>
        {React.Children.map(children, (child, i): JSX.Element | React.ReactNode => {
          if (!React.isValidElement(child)) {
            return child;
          }

          return (
            <TabHeader tab={i} onClick={() => setActiveTab(i)}>
              {child.props.title}
            </TabHeader>
          );
        })}
      </TabSelect>

      {React.Children.map(children, (child, i): JSX.Element | false => i === activeTab && child)}
    </>
  );
};

export default Tabs;
