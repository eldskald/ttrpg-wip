import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
    { languageOptions: { globals: globals.browser } },
    {
        files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
        rules: {
            "no-console": "error",
        },
        ignores: ["build/", ".github/", "assets/"],
    },
    pluginJs.configs.recommended,
    eslintConfigPrettier,
];
