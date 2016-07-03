const webpack = require('webpack');

var entry;

if (process.env.NODE_ENV !== 'production') {
	entry = [
		'webpack-dev-server/client?http://localhost:8080', // Needed for hot reloading
		'webpack/hot/only-dev-server', // See above
		'./src/app.js',
	];
}

module.exports = {
	entry: entry,
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'app.js',
	},
	// plugins: [// Plugins for Webpack
	// 	new webpack.optimize.UglifyJsPlugin({ // Optimize the JavaScript...
	// 		compress: {
	// 			warnings: false, // ...but do not show warnings in the console (there is a lot of them)
	// 		},
	// 	}),
	// ],
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
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
