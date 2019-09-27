export const breakPoints = {
  minMobileWidth: '320px',
  maxMobileWidth: '755px',
  minTabletWidth: '756px',
  maxTabletWidth: '1199px',
  minDesktopWidth: '1200px',
  maxDesktopWidth: '1703px',
  minWidescreenWidth: '1704px',
};

export const media = {
  mobileOnly: `screen and (max-width: ${breakPoints.maxMobileWidth})`,
  tabletOnly: `screen and (min-width: ${breakPoints.minTabletWidth}) and (max-width: ${breakPoints.maxTabletWidth})`,
  desktopOnly: `screen and (min-width: ${breakPoints.minDesktopWidth}) and (max-width: ${breakPoints.maxDesktopWidth})`,
  widescreenOnly: `screen and (min-width: ${breakPoints.minWidescreenWidth})`,
  tabletAndUp: `screen and (min-width: ${breakPoints.minTabletWidth})`,
  desktopAndUp: `screen and (min-width: ${breakPoints.minDesktopWidth})`,
  widescreenAndUp: `screen and (min-width: ${breakPoints.minWidescreenWidth})`,
};
