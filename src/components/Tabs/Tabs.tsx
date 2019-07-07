import React, { useEffect, useState, useRef, FunctionComponent } from 'react';
import styled from 'styled-components';
import colors from 'common/colors';

const TabContainer = styled.div`
  position: relative;
  display: flex;
`;

const Slider = styled.div`
  transition: all 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-top: 2px solid ${colors.primaryLight};
  margin-top: -2px;
`;

const SliderBackground = styled.hr`
  border-top: 2px solid ${colors.graysGray};
  border-bottom: none;
  border-left: none;
  border-right: none;
  outline: 0;
  margin: 0;
`;

interface Props {
  activeTab: number;
}

const Tabs: FunctionComponent<Props> = ({ activeTab, children, ...rest }) => {
  const [sliderOffset, setSliderOffset] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);

  const selectedTab = useRef<HTMLElement>(null);

  useEffect(() => {
    if (selectedTab && selectedTab.current) {
      setSliderOffset(selectedTab.current.offsetLeft);
      setSliderWidth(selectedTab.current.clientWidth);
    }
  }, [activeTab]);

  return (
    <div {...rest}>
      <TabContainer>
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) {
            return child;
          }

          if (child.props.tab === activeTab) {
            return React.cloneElement(child, {
              ref: selectedTab,
              selected: true,
            });
          }

          return React.cloneElement(child);
        })}
      </TabContainer>

      <SliderBackground />

      <Slider
        style={{
          marginLeft: sliderOffset + 'px',
          width: sliderWidth + 'px',
        }}
      />
    </div>
  );
};

export default Tabs;
