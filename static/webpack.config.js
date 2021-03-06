'use strict'

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src/index.js')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '/static/dist/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new HtmlWebpackIncludeAssetsPlugin({
            assets: [
                '../css/materialize.min.css',
                '../js/jquery-3.2.0.min.js',
                '../js/materialize.min.js',
                '../css/font-awesome.min.css'], append:true}),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.json?$/,
                loader: 'json'
            },
            { 
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "url-loader?limit=10000&minetype=application/font-woff" 
            },
            { 
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "file-loader" 
            },
            { 
                test: /\.css$/, 
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 25000,
                },
            },
        ]
    }}
