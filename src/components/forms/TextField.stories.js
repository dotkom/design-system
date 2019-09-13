import React from 'react';
import { action } from '@storybook/addon-actions';

import TextField from './TextField';

const onChange = action('change');

export default {
  title: 'Design System|forms/TextField',
  component: TextField,
};

export const all = () => (
  <>
    <h3>Input</h3>
    <TextField placeholder={'Search...'} />
    <h3>Input with label</h3>
    <TextField placeholder={'Search...'} label="Label" />
    <h3>Disabled</h3>
    <TextField defaultValue={'disabled'} disabled />
    <h3>Input with error</h3>
    <TextField defaultValue={'Not an email'} type="email" pattern=".+@.+" required errorMessage="Not an email" />
    <h3>Input with error (colored)</h3>
    <TextField
      defaultValue={'Green error message'}
      type="email"
      pattern=".+@.+"
      required
      invalidColor={'green'}
      errorMessage="Not a valid email"
    />
    <h3>Input with dynamic error message</h3>
    <TextField
      onChange={onChange}
      defaultValue={'Text'}
      required
      pattern=".{10,}"
      errorMessage={(input: string) => `You need ${10 - input.length} more letter${input.length !== 9 ? 's' : ''}.`}
    />
  </>
);
