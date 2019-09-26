export const breakPoints = {
  minMobileWidth: '0px',
  maxMobileWidth: '755px',
  minTabletWidth: '756px',
  maxTabletWidth: '1199px',
  minDesktopWidth: '1200px',
  maxDesktopWidth: '1703px',
  minLargeDesktopWidth: '1704px',
};

export const media = {
  mobile: `screen and (min-width: ${breakPoints.minMobileWidth}) and (max-width: ${breakPoints.maxMobileWidth})`,
  tablet: `screen and (min-width: ${breakPoints.minTabletWidth}) and (max-width: ${breakPoints.maxTabletWidth})`,
  desktop: `screen and (min-width: ${breakPoints.minDesktopWidth})`,
  smallDesktop: `screen and (min-width: ${breakPoints.minDesktopWidth}) and (max-width: ${breakPoints.maxDesktopWidth})`,
  largeDesktop: `screen and (min-width: ${breakPoints.minLargeDesktopWidth})`,
  min: {
    mobile: `screen and (min-width: ${breakPoints.minMobileWidth})`,
    tablet: `screen and (min-width: ${breakPoints.minTabletWidth})`,
    desktop: `screen and (min-width: ${breakPoints.minDesktopWidth})`,
    smallDesktop: `screen and (min-width: ${breakPoints.minDesktopWidth})`,
    largeDesktop: `screen and (min-width: ${breakPoints.minLargeDesktopWidth})`,
  },
  max: {
    mobile: `screen and (max-width: ${breakPoints.maxMobileWidth})`,
    tablet: `screen and (max-width: ${breakPoints.maxTabletWidth})`,
    desktop: `screen`,
    smallDesktop: `screen and (max-width: ${breakPoints.maxDesktopWidth})`,
    largeDesktop: `screen`,
  },
};
