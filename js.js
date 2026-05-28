import { createRequire } from 'module'
import js from '@eslint/js'
import globals from 'globals'
import importPlugin from 'eslint-plugin-import'
import mocha from 'eslint-plugin-mocha'
import n from 'eslint-plugin-n'
import promise from 'eslint-plugin-promise'
import rdf from 'eslint-plugin-rdf'
import unusedImports from 'eslint-plugin-unused-imports'

const require = createRequire(import.meta.url)
const requireExtensions = require('eslint-plugin-require-extensions')

function rulesFrom(config) {
  return config && config.rules ? config.rules : {}
}

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,cjs,mjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.es2022,
        ...globals.node,
      },
    },
    plugins: {
      import: importPlugin,
      mocha,
      n,
      promise,
      rdf,
      'require-extensions': requireExtensions,
      'unused-imports': unusedImports,
    },
    settings: {
      'import/resolver': {
        node: true,
      },
    },
    rules: {
      ...rulesFrom(importPlugin.configs.recommended),
      ...rulesFrom(n.configs['flat/recommended']),
      ...rulesFrom(promise.configs['flat/recommended']),
      ...rulesFrom(rdf.configs.recommended),
      ...rulesFrom(requireExtensions.configs.recommended),
      ...rulesFrom(mocha.configs.recommended),

      indent: ['error', 2],
      'no-console': 'error',
      'import/no-unresolved': 'error',
      'import/extensions': 'off',
      'import/order': 'error',
      'space-before-function-paren': [
        'error',
        {
          named: 'never',
        },
      ],
      'comma-dangle': [
        'error',
        'always-multiline',
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
            '*.spec.mjs',
          ],
          optionalDependencies: true,
        },
      ],
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'mocha/no-sibling-hooks': 'off',
      'mocha/no-setup-in-describe': 'warn',
      'mocha/max-top-level-suites': 'warn',
    },
  },
  {
    files: [
      '**/*.test.js',
      '**/*.spec.js',
      '**/*.test.mjs',
      '**/*.spec.mjs',
      '**/*.test.ts',
      '**/*.spec.ts',
    ],
    languageOptions: {
      globals: globals.mocha,
    },
    rules: {
      'no-unused-expressions': 'off',
      'func-names': 'off',
      'prefer-arrow-callback': 'off',
    },
  },
]
