# Design System

Online's Design System, simply dubbed Design System (DS), is made by us at [dotkom](https://github.com/dotkom/) for [Online](https://online.ntnu.no/).

The components in DS are designed with consistency in mind, and our main goal is to make it easier for dotkom to develop web pages that adhere to Online's style.

See the components live at: [design.online.ntnu.no](https://design.online.ntnu.no).

## Usage

Before importing and using a component, the `<GlobalStyle />` component should be applied to your project, preferably at root-level. This component applies the global style rules and resets which are the baseline for DS. Without it, components will likely not look or act as intended, so this is **very important**.

```javascript
import React from 'react';
import { GlobalStyle } from '@dotkomonline/design-system';
import App from './App';

export const Root = () => (
  <>
    <GlobalStyle />
    <App />
  </>
);
```

After that, importing and using components is as simple as:

```javascript
import React from 'react';
import { Message } from '@dotkomonline/design-system';

export const SuccessMessage = ({ children }) => <Message type="success">{children}</Message>;
```

To get the fonts and icons to work you will also need to include them in the head of your application. In your index.html, or your alternative, include this:

```html
<link
  href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700|Source+Serif+Pro|Source+Code+Pro|Material+Icons+Outlined"
  rel="stylesheet"
/>
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

If you want to run a chromatic test (UI image diff), use:

```bash
CHROMATIC_APP_CODE={get-app-code-from-dotkom} yarn chromatic # This may take som time
# Then, go your last build on https://www.chromaticqa.com/builds?appId=5dea690ec744f30020aaf273 to review changes in UI.
```

### Editor config

We use [MDX](https://mdxjs.com/) with Storybook, so we recommend using a [plugin](https://marketplace.visualstudio.com/items?itemName=silvenon.mdx) for syntax highlighting etc.

As mentioned, we use `eslint` and `prettier` to lint our TypeScript. We followed the setup used [here](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb). We use Visual Studio Code for development, and the guide provides a handy snippet for your editor configuration:

```json
"eslint.autoFixOnSave": true,
"eslint.validate": [
  "javascript",
  "javascriptreact",
  { "language": "typescript", "autoFix": true },
  { "language": "typescriptreact", "autoFix": true }
],
"editor.formatOnSave": true,
"[javascript]": {
  "editor.formatOnSave": false,
},
"[javascriptreact]": {
  "editor.formatOnSave": false,
},
"[typescript]": {
  "editor.formatOnSave": false,
},
"[typescriptreact]": {
  "editor.formatOnSave": false,
},
```

The snippet above sets up automatic formatting on save! You might need plugins for [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) for this to work.

### Publishing to npm

DS will automatically be published to npm when a branch beginning with `fix/` producing a patch version change, and a branch beginning with `feat/` producing a minor version change.

You can also publish DS manually by incrementing the version number in [package.json](https://github.com/dotkom/design-system/blob/master/package.json). Keep in mind that we try to follow [semantic versioning](https://docs.npmjs.com/about-semantic-versioning) in dotkom.

## Thanks

<a href="https://www.chromaticqa.com/"><img src="https://cdn-images-1.medium.com/letterbox/147/36/50/50/1*oHHjTjInDOBxIuYHDY2gFA.png?source=logoAvatar-d7276495b101---37816ec27d7a" width="120"/></a>

Thanks to [Chromatic](https://www.chromaticqa.com/) for providing the visual testing platform that helps us catch unexpected changes on time.
