// https://typescript-eslint.io/docs/
// https://github.com/prettier/eslint-plugin-prettier#recommended-configuration

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'prettier/prettier': 'warn',
  },
}
