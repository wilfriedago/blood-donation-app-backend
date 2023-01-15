module.exports = {
  '*.{js,ts}': ['eslint --fix', 'eslint', 'prettier --write'],
  '*.{json,yaml}': ['prettier --write'],
  '*.': ['prettier --write'],
};
