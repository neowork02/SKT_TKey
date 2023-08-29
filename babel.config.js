// module.exports = {
//   presets: [
//     '@vue/cli-plugin-babel/preset'
//   ]
// }

module.exports = {
    presets: [
        [
            '@vue/cli-plugin-babel/preset',
            {
                // useBuiltIns: 'usage',
                useBuiltIns: 'entry',
                corejs: { version: 3.6, proposals: true },
                targets: {
                    chrome: '72',
                    ie: '10',
                    firefox: '68',
                    safari: '11.1',
                },
            },
        ],
    ],
}
