import React from 'react';
import styled from 'styled-components';

import {CircleCheckmark} from 'index';
import {CircleCross} from 'index';

export interface IProps {
    checked?: boolean;
    disabled?: boolean;
    onChange: () => void;
    size?: number;
}

const StyledButton = styled.button<{ spacing: number, size: number }>`
    position: relative;
    display: inline-flex;
    align-items: center;
    background: #fff;
    width: ${({ size }) => (size * 2) + "px"};
    padding: ${({ spacing }) => spacing + "px"};
    height: ${({ size }) => size + "px"};
    border: ${({ spacing }) => spacing + "px"} solid @darkGray;
    border-radius: ${({ size, spacing }) => (size + spacing) + "px"};
    box-sizing: inherit;
    cursor: pointer;
`;

const StyledSlider = styled.div<{ checked?: boolean, size: number }>`
    position: relative;
    display: inline-flex;
    align-items: center;
    left: 0;
    width: ${({ size }) => size + "px"};
    height: ${({ size }) => size + "px"};
    border-radius: 50%;
    background: @red;
    transition: 0.2s;
    justify-content: center;
    
    ${({checked, size}) => checked && `
        left: calc(100% - ${size + "px"});
        background: #1e8449;
    `}
`;

const ToggleSwitch = ({ checked = false, disabled = false, onChange, size = 16 }: IProps) => {
    const spacing = size / 8;
    console.log(checked);
    return (
        <StyledButton size={size} spacing={spacing} disabled={disabled} onClick={onChange}>
            <StyledSlider size={size} checked={checked}>
                { checked ? <CircleCheckmark size={(size/2) + "px"}/> : <CircleCross size={(size/2) + "px"}/> }
            </StyledSlider>
        </StyledButton>
    );
};

export default ToggleSwitch;