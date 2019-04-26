const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	/* performance: { 
		hints: false,
	}, */

	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].[contentHash].bundle.js'
	},

	optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(), 
            new TerserPlugin()
        ]
    },

	module: {
		rules: [
			{
                test: /\.scss$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
            },
		]
	},

	plugins: [
		new CleanWebpackPlugin,
		new MiniCssExtractPlugin({filename: '[name].[contentHash].css'}),
		new HtmlWebpackPlugin({
			template: './public/template.html',
			minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true
            }
		}),
	]
});