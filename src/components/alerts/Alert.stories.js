import React from 'react';
import { action } from '@storybook/addon-actions';

import Alert from './Alert';

const onChange = action('change');

export default {
  title: 'Design System|alerts/Alert',
  component: Alert,
};

export const all = () => (
  <>
    <Alert>Default</Alert>
    <br />
    <Alert type="info">Info</Alert>
    <br />
    <Alert type="success">Success</Alert>
    <br />
    <Alert type="alert">Alert</Alert>
    <br />
    <Alert type="error">Error</Alert>
    <br />
  </>
);
