module.exports = {
  extends: [
    'standard',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  plugins: [
    'import'
  ],
  rules: {
    indent: ['error', 2],
    'no-console': 'error',
    'import/no-unresolved': 'error',
    'import/extensions': 'off',
    'import/order': 'error',
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
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/test/**/*.ts',
          '*.test.ts',
          '*.spec.ts',
          '**/test/**/*.js',
          '*.test.js',
          '*.spec.js'
        ],
        optionalDependencies: false
      }
    ]
  },
  settings: {
    'import/core-modules': ['rdf-js']
  },
  overrides: [
    {
      files: [
        '*.test.js',
        '*.spec.js',
        '*.test.ts',
        '*.spec.ts'
      ],
      rules: {
        'no-unused-expressions': 'off'
      }
    }
  ]
}
