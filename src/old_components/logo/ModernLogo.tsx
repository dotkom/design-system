import React from 'react';
import { colors } from 'common/colors';

export interface Props {
  width?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

const ModernLogo = ({ width, primaryColor = colors.officialBlue, secondaryColor = colors.officialOrange }: Props) => (
  <svg viewBox="0 0 141 112" fill="none" width={width}>
    <g clipPath="url(#clip0)">
      <path
        d="M22.213 83.8012C26.2975 90.7452 34.618 101.093 48.2128 107.048C61.8075 113.002 77.2087 113.308
            91.0284 107.897C104.848 102.487 115.955 91.803 121.904 78.197C127.853 64.5907 127.012 52.3852 125.193
            43.1452L112.968 52.5252C113.163 54.0652 114.055 62.4571 109.54 72.7815C105.026 83.106 96.5984 91.2125
            86.1118 95.3179C75.6255 99.4235 63.939 99.1917 53.6237 94.6733C43.308 90.155 38.7468 84.1652 34.6902
            78.3412L22.213 83.8012Z"
        fill={primaryColor}
      />
      <path
        d="M119.318 28.3892C115.542 21.3053 106.657 10.6523 93.0622 4.69773C79.4677 -1.25682 64.0666 -1.56244
            50.2466 3.8481C36.4269 9.25865 25.3207 19.9422 19.3712 33.5485C13.2886 47.2052 14.2678 60.9252 15.9363
            67.76L28.2333 57.8732C28.2333 57.8732 27.4165 49.5852 31.735 38.9637C36.2495 28.6395 44.6768 20.5328 55.1631
            16.4273C65.6497 12.3218 77.336 12.5537 87.6516 17.072C97.967 21.5903 103.792 28.8652 107.107 34.2692L119.318
            28.3892Z"
        fill={primaryColor}
      />
      <path
        d="M70.3601 31.1052L74.2768 56.1652L140.86 24.2453L63.7857 83.6052L60.5685 61.2052L0 87.6652L70.3601
            31.1052Z"
        fill={secondaryColor}
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="141" height="112" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default ModernLogo;
