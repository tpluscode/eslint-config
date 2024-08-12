# @tpluscode/eslint-config

Slightly customized `standard` config.

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

```json
{
  "extends": [ "@tpluscode/eslint-config/js" ]
}
```

In a TypeScript project:

```json
{
  "extends": [ "@tpluscode" ],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

`parserOptions.project` is required for TypeScript projects unless the rule `@typescript-eslint/consistent-type-exports` is disabled.
