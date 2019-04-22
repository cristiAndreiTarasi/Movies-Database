const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(common, {
	mode: 'development',

	output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },

	module: {
		rules: [
			{
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './public/template.html',
		}),
		new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: 'http://localhost:8080/',
        },{ reload: false }),
	],

	devServer: { 
        stats: {
            builtAt: false,
            children: false,
            modules: false,
            colors: true,
            progress: true,
        },
        overlay: true,
        // hotOnly: true,
        hot: true,
        // open: true, // BrowserSync opens the browser tab
        historyApiFallback: true, // 404 pages default to root ./
   }
});