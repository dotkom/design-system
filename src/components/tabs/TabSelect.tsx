import React, { useEffect, useState, useRef, FC } from 'react';
import styled from 'styled-components';
import { colors } from 'common/colors';

const TabContainer = styled.div`
  position: relative;
  display: flex;
`;

interface SliderProps {
  width: number;
  offset: number;
}

const dividerHeight = 3;

const Slider = styled.div<SliderProps>`
  transition: all 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-top: ${dividerHeight}px solid ${colors.primary};
  width: ${({ width }) => width}px;
  margin-left: ${({ offset }) => offset}px;
  margin-top: -${dividerHeight}px;
  margin-bottom: 10px;
`;

const SliderBackground = styled.hr`
  border-top: ${dividerHeight}px solid ${colors.grayLighten90};
  border-bottom: none;
  border-left: none;
  border-right: none;
  outline: 0;
  margin: 0;
`;

interface Props {
  activeTab: number;
  children: React.ReactNode;
}

const TabSelect: FC<Props> = ({ activeTab, children, ...rest }: Props) => {
  const [sliderOffset, setSliderOffset] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);

  const selectedTab = useRef<HTMLElement>(null);

  useEffect(() => {
    if (selectedTab && selectedTab.current) {
      setSliderOffset(selectedTab.current.offsetLeft);
      setSliderWidth(selectedTab.current.clientWidth);
    }
  }, [activeTab]);

  // Store a reference to the selected tab, and set its `selected` prop.
  const updatedChildren = React.Children.map(children, (child: React.ReactNode): JSX.Element | React.ReactNode => {
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
  });

  return (
    <div {...rest}>
      <TabContainer>{updatedChildren}</TabContainer>

      <SliderBackground />

      <Slider offset={sliderOffset} width={sliderWidth} />
    </div>
  );
};

export default TabSelect;
