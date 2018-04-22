/**
 * @author Nickyzhang
 * @date 2018/4/19
 * @description file templates
 */
const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: path.join(__dirname, '/src/index'),
    output: {
        path: path.join(__dirname, './build'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', 'json', 'css', 'scss'],
        alias: {
            components: path.join(__dirname, '/../src/components'),
            actions: path.join(__dirname, '/../src/actions'),
            api: path.join(__dirname, '/../src/api'),
            reducers: path.join(__dirname, '/../src/reducers'),
            utils: path.join(__dirname, '/../src/utils'),
            style: path.join(__dirname, '/../src/style'),
            pages: path.join(__dirname, '/../src/pages'),
            store: path.join(__dirname, '/../src/store'),
            assets: path.join(__dirname, '/../src/assets'),
        },
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
    }
};