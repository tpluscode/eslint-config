module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    './js.js',
    'plugin:import/typescript'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  plugins: [
    '@typescript-eslint/eslint-plugin'
  ],
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none'
        }
      }
    ],
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': ['error'],
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'warn'
  },
  settings: {
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
      files: '*.ts',
      rules: {
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error'
      }
    }
  ]
}
