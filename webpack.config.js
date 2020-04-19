const path = require('path');
var webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	plugins: [
		new webpack.IgnorePlugin(/^pg-native$/)
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'api.bundle.js'
	},
	target: 'node',
	externals: [nodeExternals()]
};