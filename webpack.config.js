const path = require('path');

module.exports = {
	mode: 'development',
	// mode: 'production',
	entry: ["./src/index.js"],
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		watchContentBase: true,
		hot: true,
		compress: true,
		port: 3000,
		transportMode: 'ws'
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},
};