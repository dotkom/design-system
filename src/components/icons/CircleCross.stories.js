import React from 'react';

import CircleCross from './CircleCross';

export default {
  title: 'Design System|icons/Circle Cross',
  component: CircleCross,
};

export const all = () => (
  <>
    <h3>Circle with Cross</h3>
    <div style={{ display: 'inline-flex' }}>
      <CircleCross size={'50px'} />
      <CircleCross size={'75px'} />
      <CircleCross />
    </div>
  </>
);
