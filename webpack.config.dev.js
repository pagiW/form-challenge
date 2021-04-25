const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCss = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[contenthash].js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            },
            {
                use: [
                    MiniCss.loader,
                    'css-loader',
                    'sass-loader'
                ],
                test: /\.scss$/
            },
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            "@components": path.resolve(__dirname, 'src/components'),
            "@styles": path.resolve(__dirname, 'src/styles')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            inject: true
        }),
        new MiniCss({
            filename: '[name].[contenthash].css'
        })
    ],
    devServer: {
        compress: true,
        historyApiFallback: true,
        open: true,
        contentBase: path.join(__dirname, 'build'),
        port: 3000,
        host: '192.168.0.7'
    }
}
