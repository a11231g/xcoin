module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    jest: true
  },
  rules: {
    semi: 'off',
    'comma-dangle': 'off',
    'jsx-quotes': 'off',
    'react-native/no-inline-styles': 0,
    radix: 'off'
  }
}
