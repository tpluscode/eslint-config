import js from '@eslint/js'
import globals from 'globals'
import { configs as importConfigs, createNodeResolver, importX } from 'eslint-plugin-import-x'
import mocha from 'eslint-plugin-mocha'
import n from 'eslint-plugin-n'
import promise from 'eslint-plugin-promise'
import unusedImports from 'eslint-plugin-unused-imports'
import stylistic from '@stylistic/eslint-plugin'
import requireExtensions from 'eslint-plugin-require-js-extension'

function rulesFrom(config) {
  return config && config.rules ? config.rules : {}
}

export default [
  js.configs.recommended,
  importX.flatConfigs.recommended,
  {
    plugins: { '@stylistic': stylistic },
  },
  {
    files: ['**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}'],
    ...stylistic.configs['recommended'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.es2022,
        ...globals.node,
      },
    },
    plugins: {
      'import-x': importX,
      mocha,
      n,
      promise,
      'require-js-extension': requireExtensions,
      'unused-imports': unusedImports,
    },
    settings: {
      'import-x/resolver-next': [
        createNodeResolver(),
      ],
    },
    rules: {
      ...rulesFrom(stylistic.configs['recommended']),
      ...rulesFrom(importConfigs.recommended),
      ...rulesFrom(n.configs['flat/recommended']),
      ...rulesFrom(promise.configs['flat/recommended']),
      ...rulesFrom(requireExtensions.configs.recommended),
      ...rulesFrom(mocha.configs.recommended),

      '@stylistic/indent': ['error', 2],
      'no-console': 'error',
      'import-x/no-unresolved': 'error',
      'import-x/extensions': 'off',
      'import-x/order': 'error',
      'n/no-missing-import': 'off',
      'n/no-missing-require': 'off',
      'n/no-extraneous-import': 'off',
      'n/no-extraneous-require': 'off',
      'n/prefer-node-protocol': 'error',
      '@stylistic/space-before-function-paren': [
        'error',
        {
          named: 'never',
        },
      ],
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
      '@stylistic/comma-dangle': [
        'error',
        'always-multiline',
      ],
      'import-x/no-extraneous-dependencies': [
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
      'n/no-unpublished-import': 'off',
      'n/no-unpublished-require': 'off',
    },
  },
  {
    files: ['eslint.config.*'],
    rules: {
      'import-x/no-extraneous-dependencies': 'off',
      'n/no-unpublished-import': 'off',
      'n/no-unpublished-require': 'off',
    },
  },
]
