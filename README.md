# @tpluscode/eslint-config

Slightly customized `standard` config.

## Installation

For JS project:

```
npm i --save-dev \
    @tpluscode/eslint-config \
    eslint-config-standard \
    eslint-plugin-import \
    eslint-plugin-node \
    eslint-plugin-promise \
    eslint-plugin-n \
    eslint-plugin-require-extensions \
    standard
```

If you write code in TypeScript, add:

```
npm i --save-dev \
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
