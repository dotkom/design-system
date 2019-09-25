import React from 'react';
import Alert from './Alert';

export default {
  title: 'Design System|Alert',
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
