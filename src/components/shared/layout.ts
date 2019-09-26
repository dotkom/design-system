export const breakPoints = {
  minMobileWidth: '320px',
  maxMobileWidth: '755px',
  minTabletWidth: '756px',
  maxTabletWidth: '1199px',
  minDesktopWidth: '1200px',
};

export const media = {
  mobile: `screen and (max-width: ${breakPoints.maxMobileWidth})`,
  tablet: `screen and (min-width: ${breakPoints.minTabletWidth}) and (max-width: ${breakPoints.maxTabletWidth})`,
  desktop: `screen and (min-width: ${breakPoints.minDesktopWidth})`,
  min: {
    mobile: `screen`,
    tablet: `screen and (min-width: ${breakPoints.minTabletWidth})`,
    desktop: `screen and (min-width: ${breakPoints.minDesktopWidth})`,
  },
  max: {
    mobile: `screen and (max-width: ${breakPoints.maxMobileWidth})`,
    tablet: `screen and (max-width: ${breakPoints.maxTabletWidth})`,
    desktop: `screen`,
  },
};
