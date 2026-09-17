import rdf from 'eslint-plugin-rdf'
import defaults from './ts-no-rdf.js'

export default [
  ...defaults,
  rdf.configs.js,
  {
    plugins: {
      rdf,
    },
  },
]
