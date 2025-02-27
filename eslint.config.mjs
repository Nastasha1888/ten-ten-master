//import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { 
    languageOptions: { 
      globals: {
        browser: true, 
        node: true,
        mocha: true
      },
      sourceType: "module" 
    },
    plugins: {
      js: pluginJs
    },
    rules: {
      "camelcase": "error",
      "no-mixed-spaces-and-tabs": "error",
      "prefer-const": "error",
    }
  }
];