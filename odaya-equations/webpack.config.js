const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const path = require('path');

const source = path.join(__dirname, '');
const dest = path.join(__dirname, 'bundle');

module.exports = {
    context: source,
    entry: {
        app: './js/index.js'
    },
    output: {
        path: dest,
        filename: '[name].bundle.js'
    },

    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }

            },
            {test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass') },
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            {test: /\.jpg$/, loader: "file-loader" },
            {test: /\.html$/, loader: "html-loader" },
            {
                test: /\.(otf|eot|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url?limit=8192'
            },
            {test: /\.(png|gif)$/,loader: 'url-loader'}
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].style.css"),
    ]
};
