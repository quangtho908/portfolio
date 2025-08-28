// eslint-disable-next-line import/no-extraneous-dependencies
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});
const eslintConfig = [
  ...compat.config({
    // Configuration for JavaScript files
    extends: [
      "airbnb-base",
      "next/core-web-vitals", // Needed to avoid warning in next.js build: 'The Next.js plugin was not detected in your ESLint configuration'
      "plugin:prettier/recommended",
    ],
    ignorePatterns: [
      "node_modules",
      "out",
      "next.config.js",
      "src/models",
      "src/ui-components",
      "src/hasura",
      ".next",
      "public",
      "(payload)",
    ],
    rules: {
      "prettier/prettier": [
        "error",
        {
          singleQuote: false,
          endOfLine: "auto",
        },
      ],
    },
    overrides: [
      // Configuration for TypeScript files
      {
        files: ["**/*.ts", "**/*.tsx"],
        plugins: ["@typescript-eslint", "unused-imports", "simple-import-sort"],
        extends: ["airbnb-typescript", "next/core-web-vitals", "prettier"],
        parserOptions: {
          project: "./tsconfig.json",
        },
        rules: {
          "prettier/prettier": [
            "error",
            {
              singleQuote: false,
              endOfLine: "auto",
            },
          ],
          "react/display-name": 0,
          "@next/next/no-img-element": "off", // We currently not using next/image because it isn't supported with SSG mode
          "import/no-extraneous-dependencies": 0,
          "import/prefer-default-export": "off", // Named export is easier to refactor automatically
          "jsx-a11y/anchor-is-valid": "off", // Next.js uses its own internal link system
          "react/destructuring-assignment": "off", // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
          "react/require-default-props": "off", // Allow non-defined react props as undefined
          "react/jsx-props-no-spreading": "off", // _app.tsx uses spread operator and also, react-hook-form
          "react-hooks/exhaustive-deps": "off", // Incorrectly report needed dependency with Next.js router
          "simple-import-sort/imports": "error", // Import configuration for `eslint-plugin-simple-import-sort`
          "simple-import-sort/exports": "error", // Export configuration for `eslint-plugin-simple-import-sort`
          "unused-imports/no-unused-imports": "error",
          "unused-imports/no-unused-vars": "off",
          "@typescript-eslint/comma-dangle": "off", // Avoid conflict rule between Eslint and Prettier
          "@typescript-eslint/consistent-type-imports": "error", // Ensure `import type` is used when it's necessary
          "@typescript-eslint/no-unused-vars": "off",
          "@typescript-eslint/lines-between-class-members": "off",
          "@typescript-eslint/no-throw-literal": "off",
          "no-console": "off",
        },
      },
    ],
  }),
];
export default eslintConfig;
