module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "airbnb-base",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: [
        "@typescript-eslint",
    ],
    rules: {
        semi: ["error", "always"],
        quotes: ["error", "double"],
        indent: ["error", 4],
        "max-len": ["error", { code: 150 }],
    },
};
