module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // Add a new feature
        'fix', // Fix a bug
        'docs', // Update documentation
        'style', // Update code style
        'refactor', // Refactor code
        'perf', // Improve performance
        'test', // Add or update tests
        'build', // Update build system or dependencies
        'ci', // Update CI configuration
        'chore', // Update build process or auxiliary tools
        'revert', // Revert to a commit
      ],
    ],
  },
};
