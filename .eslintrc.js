// .eslintrc.js
module.exports = {
  parser: "@babel/eslint-parser",
  // parser: '@typescript-eslint/parser',
  plugins: ["decorator-position"],
  extends: [
    "next/core-web-vitals",
    "plugin:decorator-position/ember", // or other configuration
  ],
  // 3. Using with Prettier Since eslint 8, the printWidth option must be specified to be compatible with the eslint-plugin-prettier rule prettier/prettier rules: {
  "decorator-position/decorator-position": ["error", { printWidth: 100 }],
  "prettier/prettier": ["error", { printWidth: 100 }],
};
