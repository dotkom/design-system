export const breakPointsInPX = {
  minMobileWidth: 320,
  minTabletWidth: 756,
  minDesktopWidth: 1200,
  minWidescreenWidth: 1704,
};

export const breakPoints = {
  minMobileWidth: breakPointsInPX.minMobileWidth + 'px',
  maxMobileWidth: breakPointsInPX.minTabletWidth - 1 + 'px',
  minTabletWidth: breakPointsInPX.minTabletWidth + 'px',
  maxTabletWidth: breakPointsInPX.minDesktopWidth - 1 + 'px',
  minDesktopWidth: breakPointsInPX.minDesktopWidth + 'px',
  maxDesktopWidth: breakPointsInPX.minWidescreenWidth - 1 + 'px',
  minWidescreenWidth: breakPointsInPX.minWidescreenWidth + 'px',
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
