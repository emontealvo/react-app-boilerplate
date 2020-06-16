const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
	},
	plugins: [
		new htmlWebpackPlugin({
			template: './src/index.html'
		}),
		new MiniCssExtractPlugin()
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}, {
				test: /\.(scss|css)$/,
				use: [
				MiniCssExtractPlugin.loader, 
				{
					loader:'css-loader',
					options: {
						modules: true,
						importLoaders: 1
					}
				}]
			}
		]
	}
}
