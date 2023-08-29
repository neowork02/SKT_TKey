// module.exports = {
//   runtimeCompiler: true,
//   devServer: {
//     disableHostCheck: true,
//     port: 8080,
//     proxy: {
//       '^/api': {
//         target: 'http://localhost:8090',
//         ws: true,
//         changeOrigin: true
//       }
//     }
//     // proxy: 'http://localhost:8090'
//   },
//   outputDir: '../src/main/resources/static',
//   chainWebpack: config => {
//     config.module
//       .rule('vue')
//         .use('vue-loader')
//           .tap(args => {
//             args.compilerOptions.whitespace = 'preserve'
//           })
//   }
// }
//const ansiRegex = require('ansi-regex')
module.exports = {
    //  assetsDir: 'src/assets',
    //transpileDependencies: [ansiRegex],
    transpileDependencies: ['vuetify', 'realreport'],
    runtimeCompiler: true,
    devServer: {
        //lintOnSave: false, // ESLint error 처리
        disableHostCheck: true,
        port: 8080,
        proxy: {
            '^/api': {
                target: 'http://localhost:8090',
                ws: true,
                changeOrigin: true,
            },
        },
        // proxy: 'http://localhost:8090'
    },
    outputDir: '../src/main/resources/static',
    chainWebpack: (config) => {
        // remove the prefetch plugin (jaan)
        config.plugins.delete('prefetch')

        config.module
            .rule('vue')
            .use('vue-loader')
            .tap((options) => {
                options.compilerOptions.whitespace = 'preserve'
                options.transformAssetUrls = {
                    video: ['src', 'poster'],
                    source: 'src',
                    img: 'src',
                    image: ['xlink:href', 'href'],
                    a: 'href',
                }
                return options
            })

        config.module
            .rule('download')
            .test(/\.(pdf|docx?|pptx?)(\?.*)?$/)
            .use('file-loader')
            .loader('file-loader')
            .options({ name: 'download/[name].[ext]' })
    },
    css: {
        loaderOptions: {
            scss: {
                additionalData: `
          @import "~@/assets/style/_variables.scss";
        `,
            },
        },
    },
}
