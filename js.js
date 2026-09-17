import rdf from 'eslint-plugin-rdf'
import defaults from './no-rdf.js'

export default [
  ...defaults,
  rdf.configs.js,
  {
    plugins: {
      rdf,
    },
  },
]
