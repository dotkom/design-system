import React from 'react';

import SpinnerLogo from './SpinnerLogo';

export default {
  title: 'Design System|logo/Spinner Logo',
  component: SpinnerLogo,
};

export const all = () => (
  <>
    <h3>Classic Spinner</h3>
    <div style={{ display: 'inline-flex' }}>
      <SpinnerLogo />
    </div>
    <h3>Spinner with other colors</h3>
    <div style={{ display: 'inline-flex' }}>
      <SpinnerLogo primaryColor={'#db7093'} secondaryColor={'#2f9c0a'} />
    </div>
    <h3>Spinners of different sizes</h3>
    <div style={{ display: 'inline-flex' }}>
      <SpinnerLogo spinnerSize={'75px'} />
      <SpinnerLogo spinnerSize={'100px'} />
      <SpinnerLogo spinnerSize={'150px'} />
    </div>
  </>
);
