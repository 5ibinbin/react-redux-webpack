/**
 * @author Nickyzhang
 * @date 2018/4/19
 * @description file templates
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}
module.exports = {
    devtool: 'source-map',
    entry: path.join(__dirname, '../src/index'),
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.min.js',
        chunkFilename: 'bundle.min.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', 'json', 'css', 'less']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-0'],
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader",
                    options: { javascriptEnabled: true }
                }]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'img/[name].[hash:4].[ext]'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                }
            },
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),  //装逼必备
        new ExtractTextPlugin('./style.[hash].css'), //css分离
        new HtmlWebpackPlugin({
            template: resolve('../public/index.html'),
        }),
    ]
};