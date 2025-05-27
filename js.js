module.exports = {
  extends: [
    'standard',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:require-extensions/recommended',
    'plugin:rdf/recommended',
    'plugin:mocha/recommended'
  ],
  plugins: [
    'import',
    'require-extensions',
    'unused-imports',
    'rdf',
    'mocha'
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
          '**/tests/**/*.ts',
          '*.test.ts',
          '*.spec.ts',
          '*.test.js',
          '*.spec.js',
          '**/test/**/*.js',
          '**/tests/**/*.js',
          '*.test.js',
          '*.spec.js',
          '**/test/**/*.mjs',
          '**/tests/**/*.mjs',
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
    ],
    'mocha/no-sibling-hooks': 'off',
    'mocha/no-setup-in-describe': 'warn',
    'mocha/max-top-level-suites': 'warn'
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
        'no-unused-expressions': 'off',
        'func-names': 'off',
        'prefer-arrow-callback': 'off'
      }
    }
  ]
}
