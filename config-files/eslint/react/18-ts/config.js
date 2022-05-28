const dependencies = [
  "@typescript-eslint/eslint-plugin@^5.13.0",
  "@typescript-eslint/parser@^5.0.0",
  "eslint@^8.16.0",
  "eslint-config-airbnb@^19.0.4",
  "eslint-config-airbnb-typescript@^17.0.0",
  "eslint-config-prettier@^8.5.0",
  "eslint-import-resolver-typescript@^2.7.1",
  "eslint-plugin-import@^2.26.0",
  "eslint-plugin-jsx-a11y@^6.5.1",
  "eslint-plugin-prettier@^4.0.0",
  "eslint-plugin-react@^7.30.0",
  "eslint-plugin-react-hooks@^4.5.0",
  "prettier@^2.6.2",
];

const script = { lint: "eslint ." };

const recommendations = "dbaeumer.vscode-eslint";

export const Config = {
  dependencies,
  script,
  recommendations,
};
