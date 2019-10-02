import React from 'react';
import ToggleSwitch from "./ToggleSwitch";

export default {
    title: 'Design System|buttons/Toggle Switch',
    component: ToggleSwitch,
};

let checked = false;

const toggle = () => {
    checked = !checked;
};

export const all = () => (
    <>
        <h3>Toggle Switch</h3>
        <ToggleSwitch checked={checked} onChange={toggle}/>
    </>
);
