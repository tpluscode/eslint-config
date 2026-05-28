import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import jsConfig from './js.js'

function rulesFrom(config) {
  return config && config.rules ? config.rules : {}
}

export default [
  ...jsConfig,
  {
    files: ['**/*.{ts,mts,cts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.mts', '.cts'],
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
    rules: {
      ...rulesFrom(tsPlugin.configs.recommended),
      ...rulesFrom(importPlugin.configs.typescript),

      'no-dupe-class-members': 'off',
      'no-redeclare': 'off',
      '@typescript-eslint/no-redeclare': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor': 'error',
      'no-undef': 'off',
    },
  },
]
