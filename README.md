# Design system for dotkom

This is a react component library for dotkom @ [online.ntnu.no](https://online.ntnu.no). See the components live at: [storybook.online.ntnu.no](https://storybook.online.ntnu.no).

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

### Editor config

We use [MDX](https://mdxjs.com/) with Storybook, so we recommend using a [plugin](https://marketplace.visualstudio.com/items?itemName=silvenon.mdx) for syntax highlighting etc.

As mentioned, we use `eslint` and `prettier` to lint our TypeScript. We followed the setup used [here](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb). We use Visual Studio Code for development, and the guide provides a handy snippet for your editor configuration:

```json
"eslint.autoFixOnSave":  true,
"eslint.validate":  [
  "javascript",
  "javascriptreact",
  {"language":  "typescript",  "autoFix":  true  },
  {"language":  "typescriptreact",  "autoFix":  true  }
],
"editor.formatOnSave":  true,
"[javascript]":  {
  "editor.formatOnSave":  false,
},
"[javascriptreact]":  {
  "editor.formatOnSave":  false,
},
"[typescript]":  {
  "editor.formatOnSave":  false,
},
"[typescriptreact]":  {
  "editor.formatOnSave":  false,
},
```

The snippet above sets up automatic formatting on save! You might need plugins for [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) for this to work.
