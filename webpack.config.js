const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //  So webpack knows where to start building the bundle
    entry: './src/index.ts',
    // ts-loader configuration
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    // Output location
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // Dev server config for webpack-dev-server
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), // Where to watch for updates
        open: true // Open browser when starting dev server
    },
    plugins: [
        // Serve index.html file when starting dev server
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
};
