'use strict';

const path = require('path');
const bundle = __dirname + "/src/bundle.js";
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const SOURCE_PATH = './src';
const OUTPUT_PATH = './dist';
const PORT = 8080;

module.exports = {
    context: __dirname,
    devtool: "source-map",
    entry: [
        path.join(__dirname, SOURCE_PATH, 'bundle.js')
    ],
    output: {
        path: __dirname + "/dist",
        filename: "index.js"
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
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','postcss-loader']
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','postcss-loader','sass-loader']
                })
            }, 
            {
                test: /\.woff2?$|\.ttf$|\.eot$/,
                loader: "file-loader?name=/fonts/[name].[ext]"
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
            filename: 'index.css',
            disable: false,
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
    devtool: 'inline-source-map',
    devServer: {
        stats: 'errors-only',
        host: 'localhost',
        port: PORT,
        contentBase: path.join(__dirname, OUTPUT_PATH),
        historyApiFallback: true,
        publicPath: '/',
    }
}