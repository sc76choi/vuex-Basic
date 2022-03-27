module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: [
      "plugin:vue/essential",
      "eslint:recommended",
      "plugin:prettier/recommended"
    ],
    parserOptions: {
      parser: "@babel/eslint-parser"
    },
    rules: {
      "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    //   "prettier/prettier": [
    //     "warn",
    //     {
    //       semi: false,
    //       trailingComma: "none"
    //     },
    //     "error",
    //     {
    //         endOfLine: "auto",
    //     }
    //   ],
      "vue/multi-word-component-names": "off",
      "vue/valid-v-on": "off"
    }
  }
  
  // npx prettier src/**/* --write