// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import react from "eslint-plugin-react";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import jest from "eslint-plugin-jest";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import importPlugin from "eslint-plugin-import"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("airbnb-typescript"), {
    plugins: {
        react,
        "@typescript-eslint": typescriptEslint,
        jest,
        "import": importPlugin
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.jest,
            Atomics: "readonly",
            SharedArrayBuffer: "readonly",
        },

        parser: tsParser,
        ecmaVersion: 2018,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
            projectService: true,
            tsconfigRootDir: import.meta.dirname,
        },
    },

    rules: {
        // override deprecated rules
        "@typescript-eslint/brace-style": 0,
        "@typescript-eslint/comma-dangle": 0,
        "@typescript-eslint/comma-spacing": 0,
        "@typescript-eslint/func-call-spacing": 0,
        "@typescript-eslint/indent": 0,
        "@typescript-eslint/keyword-spacing": 0,
        "@typescript-eslint/lines-between-class-members": 0,
        "@typescript-eslint/no-extra-parens": 0,
        "@typescript-eslint/no-extra-semi": 0,
        "@typescript-eslint/no-throw-literal": 0,
        "@typescript-eslint/object-curly-spacing": 0,
        "@typescript-eslint/semi": 0,
        "@typescript-eslint/space-before-blocks": 0,
        "@typescript-eslint/space-before-function-paren": 0,
        "@typescript-eslint/space-infix-ops": 0,
        "@typescript-eslint/quotes": 0,
        "react/jsx-filename-extension": 0,
        "react/jsx-props-no-spreading": 0,
        "react/prop-types": 0,
        "max-len": [1, 150],
        "object-curly-newline": 0,
        "react/destructuring-assignment": 0,
        "react/static-property-placement": 0,
        "arrow-parens": 0,
        "jsx-a11y/anchor-has-content": 0,
        "jsx-a11y/heading-has-content": 0,
    },
}, ...storybook.configs["flat/recommended"]];