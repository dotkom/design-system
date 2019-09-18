import React from 'react';
import styled from 'styled-components';

export interface IProps {
    color?: string;
    size?: string;
}

const CircleContainer = styled.svg<{ color?: string, size?: string }>`
    background-color: ${({ color }) => color};
    height: ${({ size }) => size};
    width: ${({ size }) => size};
    border-radius: 50%;
`;

const CircleCross = ({ color = '#eb5757', size = '16px'}: IProps) => (
    <CircleContainer color={color} size={size}>
        <title>Circle Containing Red Cross</title>
        <path id="path0_stroke" stroke="#FFF" fill="#FFF" d="M -1.06066 1.06066L 21.9393 24.0607L 24.0607 21.9393L
        1.06066 -1.06066L -1.06066 1.06066ZM 1.06066 24.0607L 24.0607 1.06066L 21.9393 -1.06066L -1.06066 21.9393L
        1.06066 24.0607Z"/>
    </CircleContainer>

);

export default CircleCross;
