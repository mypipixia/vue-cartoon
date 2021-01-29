const IS_DEV = process.env.NODE_ENV === 'development';
let path = require('path');
let pahtResolve = (dir) => {
    return path.resolve(__dirname, './' + dir)
}
module.exports = {
    devServer: {
        port: 9000,
    },
    configureWebpack: config => {
        config.resolve.alias = {
            '@': pahtResolve('src'),
            'components': pahtResolve('src/components'),
            'untils': pahtResolve('src/untils'),
            'hooks': pahtResolve('src/hooks'),
            'theme': pahtResolve('src/theme')
        }
    },
    css: {
        requireModuleExtension: true,
        loaderOptions: {
            scss: {
                prependData: `@import "~@/theme/theme-ui.scss";`
            }
        }
    }
}