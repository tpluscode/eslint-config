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
    ],
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': ['error'],
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare: 'warn'
  },
  settings: {
    'import/core-modules': ['rdf-js'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      }
    }
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
    },
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
    },
    {
      files: '*.ts',
      rules: {
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error'
      }
    }
  ]
}
