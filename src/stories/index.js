import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import ExampleBox from 'components/ExampleBox';
import TextField from 'components/input/TextField';
import Alert from 'components/alerts/Alert';
import SpinnerLogo from "../components/Logo/SpinnerLogo";
import StaticLogo from "../components/Logo/StaticLogo";

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

storiesOf('Input', module).add('text field', () => (
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
      defaultValue={'Text'}
      required
      pattern=".{10,}"
      errorMessage={(input: string) => `You need ${10 - input.length} more letter${input.length !== 9 ? 's' : ''}.`}
    />
  </>
));

storiesOf('Alert', module).add('alertstripe', () => (
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
  ));

storiesOf('Logo', module)
    .add('Spinners', () => (
        <>
            <h3>Classic Spinner</h3>
            <div style={{display: 'inline-flex'}}>
            <SpinnerLogo/>
            </div>
            <h3>Spinner with other colors</h3>
            <div style={{display: 'inline-flex'}}>
                <SpinnerLogo primaryColor={'#db7093'} secondaryColor={'#2f9c0a'}/>
            </div>
            <h3>Spinners of different sizes</h3>
            <div style={{display: 'inline-flex'}}>
                <SpinnerLogo spinnerSize={"75px"}/>
                <SpinnerLogo spinnerSize={"100px"}/>
                <SpinnerLogo spinnerSize={"150px"}/>
            </div>
        </>
    )
);

storiesOf('Logo', module).add('Static Logo', () => (
    <>
        <h3>Classic Static Logo</h3>
        <StaticLogo/>
        <h3>Static Logo with alternative colors</h3>
        <StaticLogo primaryColor={'#db7093'} secondaryColor={'#2f9c0a'}/>
    </>
));
