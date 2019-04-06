module.exports = {
  env: {
    browser: 1,
  },
  extends: 'seegno',
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'no-confusing-arrow': 'off',
  },
  settings: {
    react: { version: 'detect' },
  },
};
