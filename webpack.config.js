'use strict';

var path = require('path');
var bundle = __dirname + "/src/bundle.js";
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var SOURCE_PATH = './src';
var OUTPUT_PATH = './dist';
var PORT = 8080;

module.exports = {
    context: __dirname,
    devtool: 'inline-source-map',
    entry: path.join(__dirname, SOURCE_PATH, 'bundle.js'),
    output: {
        path: path.join(__dirname, OUTPUT_PATH),
        filename: 'assets/js/index.js',
        publicPath: './'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','postcss-loader','sass-loader']
                })
            },
            {
                test: /\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: "file-loader?name=/img/[name].[ext]"
            },
            {
                test: /\.html$/,
                exclude: [
                    path.join(__dirname, SOURCE_PATH + '/index.html')
                ],
                use: [
                    { loader: 'ngtemplate-loader?relativeTo=' + __dirname },
                    { loader: 'html-loader' }
                ]
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'assets/css/index.css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, SOURCE_PATH + '/index.html'),
            alwaysWriteToDisk: true,
            minify: {
                removeScriptTypeAttributes: true,
            }
        }),
    ],
    devServer: {
        stats: 'errors-only',
        host: 'localhost',
        port: PORT,
        contentBase: path.join(__dirname, OUTPUT_PATH),
        historyApiFallback: true,
        publicPath: '/',
    }
}