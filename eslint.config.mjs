import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";
import css from "@eslint/css";
import prettier from "eslint-plugin-prettier"; // 🔹 importa o plugin
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js, prettier }, // 🔹 adiciona o prettier como plugin
    extends: ["js/recommended", "prettier"],
    rules: {
      "prettier/prettier": "error", // 🔹 aplica o Prettier como regra
    },
    languageOptions: { globals: globals.node }
  },
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"]
  },
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"]
  }
]);
