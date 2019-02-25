const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
    // First, let's define an entry point for webpack to start its crawling.
    entry: './src/index.tsx',
    // Second, we define where the files webpack produce, are placed
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
            { test: /\.(ts|tsx)$/, loader: "ts-loader", options: { configFile: "tsconfig.gui.json"} },
            { 
                test: /\.(le|c)ss$/, // .less and .css
                use: [ 
                    isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 
                    'css-loader', 
                    'less-loader'
                ],
            },
        ]
    },
    // Add an instance of the MiniCssExtractPlugin to the plugins list
    // But remember - only for production!
    plugins: isProduction ? [new MiniCssExtractPlugin()] : [],
    devtool: 'source-map',
};

module.exports = config;
