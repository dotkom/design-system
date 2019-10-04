# Design system for dotKom

This is a react component library for dotKom @ [online.ntnu.no](https://online.ntnu.no). See the components live at: [storybook.online.ntnu.no](https://storybook.online.ntnu.no).

## Usage

```javascript
import React from 'react';
import { Alert } from '@dotkomonline/design-system';

export const SuccessAlert = ({ children }) => <Alert type="success">{children}</Alert>;
```

## Development

`yarn` to install the dependencies.

`yarn start` to start the storybook environment.

### Before contributing

You will need to follow the rules from `eslint` and `prettier`. To verify that you follow the rules, run:

```bash
yarn lint-check
yarn format-check
```

If you want to autoformat, use these:

```bash
yarn lint
yarn format
```
