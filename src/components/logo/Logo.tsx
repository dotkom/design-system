import React from 'react';
import styled from 'styled-components';
import { colors } from 'common/colors';

type ColorKeys = keyof typeof colors;

interface LogoProps {
    backgroundColor: ColorKeys;
    width: number;
    height?: number;
}

type OwnProps = Partial<LogoProps>;

const url = 'https://online.ntnu.no/static/img/online_logo.svg';

const LogoImg = styled.img<LogoProps>`
    background-color: ${({backgroundColor}) => colors[backgroundColor]};
    ${({ width }) => width }
    ${({ height }) => height ? height + 'px' : ''}
`;

const Logo = ({ backgroundColor = 'primary', width = 239, height }:OwnProps) => {
    return <LogoImg src={url} height={height} width={width} backgroundColor={backgroundColor}></LogoImg>
};

export default Logo;