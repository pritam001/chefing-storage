module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json",
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["@typescript-eslint/eslint-plugin", "simple-import-sort"],
    extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "airbnb-base",
        "airbnb-typescript/base",
    ],
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    rules: {
        "simple-import-sort/imports": "error",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "@typescript-eslint/quotes": ["error", "double"],
        "indent": ["error", 4],
        "@typescript-eslint/indent": ["error", 4],
        "max-len": ["error", { code: 150 }],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ],
    },
};
