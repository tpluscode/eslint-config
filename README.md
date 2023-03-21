# @tpluscode/eslint-config

Slightly customized `standard` config.

## Installation

Newer NPM installs peer dependencies automatically

```
npm i --save-dev @tpluscode/eslint-config
```

With yarn v1 install with:

```
npx install-peerdeps -Yd @tpluscode/eslint-config
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
