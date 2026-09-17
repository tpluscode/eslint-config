import jsConfig from './js.js'

export default [
  ...jsConfig,
  {
    settings: {
      'import-x/resolver': {
        typescript: { alwaysTryTypes: true },
      },
    },
  },
]
