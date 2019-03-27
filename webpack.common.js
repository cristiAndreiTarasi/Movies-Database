const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: [
            "react-hot-loader/patch", 
            "@babel/polyfill", 
            "./src/index.js"
        ],
        // here other entries
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader/webpack', 'babel-loader'],
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpg|png|gif|svg|pdf|ico)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'images'
                    }
                }
            }
        ]
    },
}
