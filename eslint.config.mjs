import js from '@eslint/js';
import globals from 'globals';
import json from '@eslint/json';
import css from '@eslint/css';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {
      js,
      prettier: prettierPlugin,
    },
    extends: [js.configs.recommended, prettierConfig],
    rules: {
      'prettier/prettier': 'error',
      'no-inline-comments': 'off', // permite comentários no meio do código
    },
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: ['**/*.json'],
    plugins: { json },
    extends: [json.configs.recommended],
    language: 'json/json',
  },
  {
    files: ['**/*.css'],
    plugins: { css },
    extends: [css.configs.recommended],
    language: 'css/css',
  },
]);
