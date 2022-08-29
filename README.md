# @tpluscode/eslint-config

Slightly customized `standard` config with TypeScript rules enabled.

## Installation

```
npm i --save-dev \
    @tpluscode/eslint-config \
    @typescript-eslint/eslint-plugin \
    @typescript-eslint/parser \
    eslint-import-resolver-typescript \
    eslint-config-standard \
    eslint-plugin-import \
    eslint-plugin-node \
    eslint-plugin-promise \
    eslint-plugin-n \
    standard
```

## Usage

In your eslint config:

```json
{
  "extends": [ "@tpluscode" ],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```
