const IGNORE = 0
// const WARN = 1
const ERROR = 2

module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/recommended",
    "plugin:prettier-vue/recommended",
  ],
  rules: {
    "@typescript-eslint/semi": [ERROR, "never"],
    "@typescript-eslint/indent": [ERROR, 2],
    "@typescript-eslint/explicit-function-return-type": IGNORE,
    "@typescript-eslint/explicit-member-accessibility": IGNORE,
    "@typescript-eslint/no-object-literal-type-assertion": IGNORE,
    "@typescript-eslint/no-use-before-define": IGNORE,
    "@typescript-eslint/no-inferrable-types": IGNORE,
    "@typescript-eslint/no-empty-interface": IGNORE,
    "vue/html-self-closing": IGNORE,
    "prettier-vue/prettier": [
      "error",
      {
        semi: false,
      },
    ],
  },
  settings: {
    "prettier-vue": {
      SFCBlocks: {
        template: false,
        script: true,
        style: true,
      },
    },
  },
  env: {
    node: true,
  },
}
