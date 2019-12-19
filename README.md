# @tpluscode/eslint-config

Slightly customized `standard` config with TypeScript rules enabled. 

## Installation

```
npm i --save-dev \
    @tpluscode/eslint-config \
    @typescript-eslint/eslint-plugin \
    @typescript-eslint/parser \
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
