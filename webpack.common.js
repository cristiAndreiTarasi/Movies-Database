// const path = require

module.exports = {
	entry: ['@babel/polyfill', './src/index.js'],

	module: {
		rules: [
			{
				test: /\.html$/,
				use: [{
					loader: 'html-loader',
					options: { minimize: true }
				}]
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loaders: ['babel-loader', 'react-hot-loader/webpack']
			},
            {
                test: /\.(jpg|png|gif|svg|pdf|ico)$/,
                use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[hash].[ext]',
							outputPath: 'images'
						}
					}
				]
            },
		]
	},
};