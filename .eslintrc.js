module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
        'plugin:prettier/recommended', //eslint와 충돌되는 속성 제거기능
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        // "no-console": process.env.NODE_ENV === "prd" ? "warn" : "off",
        // "no-debugger": process.env.NODE_ENV === "prd" ? "warn" : "off",
        // vue component 태크 순서 지정
        // 'vue/component-tags-order': [
        //     'error',
        //     {
        //         order: ['script', 'template', 'style'],
        //     },
        // ],
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)',
            ],
            env: {
                mocha: true,
            },
        },
    ],
}