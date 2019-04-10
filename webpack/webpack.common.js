const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    entry:  './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'ordered-grid.js',
        publicPath: '/dist/',
        library: 'orderedGrid',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.ProgressPlugin()
    ],
    optimization: {
        noEmitOnErrors: true
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    emitError: true,
                    fix: true
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};