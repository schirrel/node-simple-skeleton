const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const ASSET_PATH = process.env.ASSET_PATH || '/public';

module.exports = {
	node: {
		global: false,
		__filename: false,
		__dirname: false,
	  },
	mode: 'production',
	entry: './src/index.js',
	plugins: [
		new webpack.IgnorePlugin(/^pg-native$/)
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'api.bundle.js',
		publicPath: ASSET_PATH,
	},
	target: 'node',
	externals: [nodeExternals()],

	plugins: [
	  // This makes it possible for us to safely use env vars on our code
	  new webpack.DefinePlugin({
		'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
	  }),
	]
};