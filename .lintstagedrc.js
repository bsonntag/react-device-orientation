module.exports = {
  '*.js': ['eslint --fix', 'prettier --write', 'git add'],
  '*.json': ['prettier --write', 'git add'],
};
