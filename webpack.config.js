const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        'HauptstimmeJs': './dist/exports.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'exports.min.js',
        libraryTarget: 'umd',
        library: 'HauptstimmeJs',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: 'source-map',
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true,
            include: /\.min\.js$/,
        })
    ],
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader',
            exclude: /node_modules/,
            query: {
                declaration: false,
            }
        }]
    }
};