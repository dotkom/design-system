import React from 'react';

import StaticLogo from './StaticLogo';

export default {
  title: 'Design System|logo/Static Logo',
  component: StaticLogo,
};

export const all = () => (
  <>
    <h3>Classic Static Logo</h3>
    <StaticLogo />
    <h3>Static Logo with alternative colors</h3>
    <StaticLogo primaryColor={'#db7093'} secondaryColor={'#2f9c0a'} />
  </>
);
