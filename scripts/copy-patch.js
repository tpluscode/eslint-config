import fs from 'node:fs'

fs.mkdirSync('patched', { recursive: true })
fs.copyFileSync('node_modules/eslint-plugin-require-js-extension/index.js', 'patched/eslint-plugin-require-js-extension.js')
