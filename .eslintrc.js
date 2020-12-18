module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'prettier/prettier': 'off',
  },
};
