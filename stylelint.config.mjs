/** @type {import('stylelint').Config} */
const stylelintConfig = {
  extends: ['stylelint-config-standard'],
  rules: {
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]*$',
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
  ignoreFiles: ['**/*.css', '!**/*.module.css'],
};

export default stylelintConfig;
