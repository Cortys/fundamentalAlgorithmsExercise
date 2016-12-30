"use strict";

const webpack = require("webpack");

module.exports = {
	target: "node",
	entry: "./src/index.js",
	output: {
		path: "./build",
		filename: "johnson.js"
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: "babel-loader"
		}]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.BannerPlugin("#!/usr/bin/env node", {
			raw: true
		})
	]
};
