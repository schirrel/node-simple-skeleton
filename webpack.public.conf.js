const path = require('path');
var webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
	mode: 'production',
	entry: './src/public/main.js',
	plugins: [
		new CopyPlugin([
			'./src/public/index.html', '/src/public/assets/*/**/**'
		]),
	],
	output: {
		path: path.resolve(__dirname, 'dist/public'),
		filename: 'main.js'
	}
};