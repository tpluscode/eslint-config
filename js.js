module.exports = {
  extends: [
    'standard',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:require-extensions/recommended'
  ],
  plugins: [
    'import',
    'require-extensions',
    'unused-imports'
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
          '*.test.js',
          '*.spec.js',
          '**/test/**/*.js',
          '*.test.js',
          '*.spec.js',
          '**/test/**/*.mjs',
          '*.test.mjs',
          '*.spec.mjs'
        ],
        optionalDependencies: false
      }
    ],
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }
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
        '*.test.mjs',
        '*.spec.mjs',
        '*.test.ts',
        '*.spec.ts'
      ],
      rules: {
        'no-unused-expressions': 'off'
      }
    }
  ]
}
