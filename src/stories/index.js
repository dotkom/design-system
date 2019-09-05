import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import ExampleBox from 'components/ExampleBox';
import Input from 'components/input/Input';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Input', module).add('input field', () => (
  <>
    <h3>Input</h3>
    <Input placeholder={'Search...'} />
    <h3>Input with label</h3>
    <Input placeholder={'Search...'} label="Label" />
    <h3>Disabled</h3>
    <Input defaultValue={'disabled'} disabled />
    <h3>Input with error</h3>
    <Input defaultValue={'Not an email'} type="email" pattern=".+@.+" required errorMessage="Not an email" />
    <h3>Input with error (colored)</h3>
    <Input
      defaultValue={'Green error message'}
      type="email"
      pattern=".+@.+"
      required
      invalidColor={'green'}
      errorMessage="Not a valid email"
    />
    <h3>Input with dynamic error message</h3>
    <Input
      defaultValue={'Text'}
      required
      pattern=".{10,}"
      errorMessage={(input: string) => `You need ${10 - input.length} more letter${input.length !== 9 ? 's' : ''}.`}
    />
  </>
));
