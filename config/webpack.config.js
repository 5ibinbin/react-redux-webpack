/**
 * @author Nickyzhang
 * @date 2018/4/19
 * @description file templates
 */
const path = require('path');

function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}

const webpackConfig = {
    entry: resolve(__dirname + '/src/index.js'),
    output: {
        path: resolve('dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
                    }
                },
                exclude: /node_modules/
            },
            {test: /\.css$/, use: 'css-loader'},
            {test: /\.svg/, loader: 'svg-url-loader'}
        ]
    }
};

module.exports = webpackConfig;