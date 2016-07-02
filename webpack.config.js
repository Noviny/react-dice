const webpack = require('webpack');

module.exports = {
	entry: [
		'./index.js',
	],
	output: {
		path: __dirname + '/dist/',
		filename: 'react-dice.js',
	},
	// plugins: [// Plugins for Webpack
	// 	new webpack.optimize.UglifyJsPlugin({ // Optimize the JavaScript...
	// 		compress: {
	// 			warnings: false, // ...but do not show warnings in the console (there is a lot of them)
	// 		},
	// 	}),
	// ],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react'],
				},
			},
		],
	},
};
