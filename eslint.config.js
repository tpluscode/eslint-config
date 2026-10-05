import jsConfig from './js.js'

export default [
  {
    ignores: ['patched/**'],
  },
  ...jsConfig,
  {
    settings: {
      'import-x/resolver': {
        typescript: { alwaysTryTypes: true },
      },
    },
  },
]
