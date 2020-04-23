module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'standard',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'import'
  ],
  rules: {
    indent: 'off',
    'no-console': 'error',
    'import/no-unresolved': 'warn',
    'import/extensions': 'off',
    'space-before-function-paren': [
      'error',
      {
        named: 'never'
      }
    ],
    'comma-dangle': [
      'error',
      'always-multiline'
    ],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none'
        }
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false, optionalDependencies: false
      }
    ]
  },
  settings: {
    'import/core-modules': ['rdf-js']
  },
  overrides: [
    {
      files: [
        '*.conf.js',
        '*.config.js'
      ],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ]
}
