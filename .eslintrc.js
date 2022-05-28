module.exports = {
  extends: ["airbnb-base", "prettier", "plugin:node/recommended"],
  plugins: ["prettier"],
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    "node/no-unsupported-features/es-syntax": [
      "error",
      {
        version: ">=13.0.0",
        ignores: ["modules"],
      },
    ],
    "import/prefer-default-export": 0,
    "import/extensions": [
      "error",
      {
        js: "ignorePackages",
      },
    ],
  },
};
