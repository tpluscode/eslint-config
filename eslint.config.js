import jsConfig from './js.js'

export default [
  ...jsConfig,
  {
    settings: {
      'import/resolver': {
        typescript: { alwaysTryTypes: true },
      },
    },
  },
]
