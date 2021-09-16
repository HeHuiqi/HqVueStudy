var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


module.exports = merge(webpackBaseConfig, {

    output: {
        //这里设置为空，HtmlwebpackPlugin在生成index.html时会去除 ./dist/ 路径
        publicPath: '',
        filename: '[name].[hash:7].js',
    },
    stats: { children: false },
    plugins: [
        //定义当前的node环境为生产环境
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        //压缩js
        new UglifyJsPlugin({
            uglifyOptions: {
                compress: {
                    warnings: false
                }
            },
        }),
        //提取模版，并保存入口html文件
        // 不写自动生成index.html
        new HtmlwebpackPlugin({
            filename: 'index.html',
            template: "./index.ejs",
            inject: true,
        }),
    ],
});