/**
 * @author Nickyzhang
 * @date 2018/4/19
 * @description file templates
 */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const PORT = 3010;
function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}
const webpackConfigDev = {
    plugins: [
        // 定义环境变量为开发环境
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            IS_DEVELOPMETN: true,
        }),
        new OpenBrowserPlugin({
            url: `http://localhost:${PORT}/#/login`,
        }),
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: resolve('../src'),
        historyApiFallback: false,
        hot: false,
        host: '0.0.0.0',
        port: PORT,
    },
};

module.exports = merge(webpackConfig, webpackConfigDev);
