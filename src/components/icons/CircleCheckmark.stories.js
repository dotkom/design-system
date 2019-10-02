import React from 'react';

import CircleCheckmark from "./CircleCheckmark";

export default {
    title: 'Design System|icons/Circle Checkmark',
    component: CircleCheckmark,
};

export const all = () => (
    <>
        <h3>Circle with Cross</h3>
        <div style={{display: "inline-flex"}}>
            <CircleCheckmark size={"50px"}/>
            <CircleCheckmark size={"75px"}/>
            <CircleCheckmark/>
        </div>
    </>
);
