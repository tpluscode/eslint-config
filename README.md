# @tpluscode/eslint-config

Slightly customized standard-style config for ESLint flat config.

## Installation

Newer NPM installs peer dependencies automatically

```
npm i --save-dev @tpluscode/eslint-config
```

For yarn v1 use `install-peerdeps` (`--extra-args` needed for monorepos):

```
npx install-peerdeps -Yd @tpluscode/eslint-config (--extra-args "-W")
```

If you write code in TypeScript, add:

```
npm i --save-dev \
    typescript \
    @typescript-eslint/eslint-plugin \
    @typescript-eslint/parser \
    eslint-import-resolver-typescript
```

## eslint config

In a JavaScript project:

```js
import config from '@tpluscode/eslint-config/js'

export default [
  ...config,
]
```

In a TypeScript project:

```js
import config from '@tpluscode/eslint-config'

export default [
  ...config,
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]
```

`parserOptions.project` is required for TypeScript projects unless the rule `@typescript-eslint/consistent-type-exports` is disabled.
