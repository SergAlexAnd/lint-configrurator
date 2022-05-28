module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": [
      "@typescript-eslint",
      "prettier"
  ],
  "settings": {
      "react": {
          "version": "detect"
      },
      'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true
          }
        }
  },
  "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "project": "./tsconfig.json",
      "tsconfigRootDir": __dirname
  },
  "extends": [
      "airbnb",
      "airbnb-typescript",
      "airbnb/hooks",
      "prettier",
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:import/recommended",
      "plugin:import/typescript",
      "plugin:prettier/recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  "rules": {
      "react/function-component-definition": [
          2,
          {
              namedComponents: "arrow-function",
          },
      ],
      "react/jsx-no-useless-fragment": ["off"],
      "@typescript-eslint/default-param-last": ["off"],
      "@typescript-eslint/no-misused-promises": ["off"],
      "@typescript-eslint/no-unsafe-argument": ["off"],
      "class-methods-use-this": [0],
      "no-unsafe-optional-chaining": [0],
      "prefer-regex-literals": [0],
      "react/display-name": [0],
      "no-promise-executor-return": [0],
      "no-restricted-imports": ["error", {
          "patterns": ["modules/*"]
      }],
      "react/jsx-filename-extension": 0,
      "react/jsx-uses-vars": [
          2
      ],
      "no-underscore-dangle": [
          "error",
          {
              "allow": [
                  "__REDUX_DEVTOOLS_EXTENSION__"
              ]
          }
      ],
      "react/jsx-key": 1,
      "import/order": [
          "error",
          {
              "groups": ["builtin", "external", "internal", ["parent", "sibling"], "index", "object"],
              "newlines-between": "always",
              "pathGroups": [{
                  "pattern": "react",
                  "group": "builtin",
                  "position": "before",
              },
          ],
              "pathGroupsExcludedImportTypes": ["react"],
          }
      ],
      "import/no-extraneous-dependencies": 0,
      "react-hooks/exhaustive-deps": 0,
      "import/prefer-default-export": 0,
      "react/prop-types": 0,
      "react/require-default-props": 0,
      "max-len": 0,
      "require-jsdoc": 0,
      "valid-jsdoc": 0,
      "no-multi-str": 0,
      "react/no-find-dom-node": 0,
      "no-console": 0,
      "indent": "off",
      "no-use-before-define": 0,
      "@typescript-eslint/no-use-before-define": [
          "error",
          {
              "typedefs": true,
              "ignoreTypeReferences": true,
              "variables": false
          }
      ],
      "linebreak-style": 0,
      "prettier/prettier": [
          "error",
          {
              "trailingComma": "es5",
              "singleQuote": true,
              "printWidth": 130,
              "endOfLine": "auto",
              "tabWidth": 2
          }
      ]
  }
}