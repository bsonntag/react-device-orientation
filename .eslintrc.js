module.exports = {
  env: {
    browser: 1,
  },
  extends: 'seegno',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'jsx-quotes': ['error', 'prefer-single'],
    'no-confusing-arrow': 'off',
    'no-extra-parens': [
      'error',
      'all',
      { ignoreJSX: 'all' },
    ],
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'always' },
    ],
    'react/jsx-curly-spacing': 'error',
    'react/jsx-indent-props': [1, 2],
    'react/jsx-max-props-per-line': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-literals': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-sort-props': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 'error',
    'react/no-danger': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-unknown-property': 'error',
    'react/prefer-es6-class': 'error',
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-prop-types': 'error',
  },
};
