/**
 * @author Nickyzhang
 * @date 2018/4/19
 * @description file templates
 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const Copy = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const PORT = 3000;
function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}
const webpackConfigDev = {
    mode: 'production',
    plugins: [
        // 定义环境变量为开发环境
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            IS_DEVELOPMETN: false,
        }),
        // new CleanWebpackPlugin(['build'])
        new webpack.optimize.UglifyJsPlugin({ minimize: true }),
        // 分析代码
        new BundleAnalyzerPlugin({ analyzerPort: 3011 }),
        new Copy([
            { from: './src/assets', to: './assets' }
        ])
    ]
};

module.exports = merge(webpackConfig, webpackConfigDev);