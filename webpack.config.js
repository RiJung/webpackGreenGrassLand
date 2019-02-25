const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;
const styleLoader = isDev ? 'style-loader' : MiniCssExtractPlugin.loader;
const cssLoader = {
    loader: "css-loader",
    options: {
        camelCase: true,
        localIdentName: '[local]--[hash:base64:5]',
        minimize: isProd,
        sourceMap: isDev
    }
};
const lessLoader = {
    loader: "less-loader",
    options: {
        javascriptEnabled: true,
        sourceMap: isDev
    }
};

module.exports = (env, argv) => {
    return {
        entry: './src/index.tsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
        },
        devServer: {
            contentBase: path.resolve(__dirname, 'public'),
            compress: true,
            historyApiFallback: true,
            host: "127.0.0.1",
            port: 8081,
            watchOptions: {
                ignored: ['dist']
            }
        },
        module: {
            rules: [
                { test: /\.(ts|tsx)$/, loader: "ts-loader", options: { configFile: "tsconfig.gui.json" } },
                { test: /.css$/, use: [ styleLoader, cssLoader ] },
                { test: /.less$/, use: [ styleLoader, cssLoader, lessLoader ] }
            ]
        },
        plugins: isProd ? [new MiniCssExtractPlugin()] : [],
        devtool: 'source-map'
    }
};
