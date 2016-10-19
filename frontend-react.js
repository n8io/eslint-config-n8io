const backend = {
  "extends": [
    "plugin:react/recommended",
    "n8io/frontend"
  ],
  "ecmaFeatures": {"jsx": true},
  "plugins": [
    "react",
    "jsx-a11y"
  ],
  "rules": {"jsx-quotes": ["error", "prefer-single"]}
};

module.exports = backend;
