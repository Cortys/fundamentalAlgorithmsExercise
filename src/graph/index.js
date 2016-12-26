"use strict";

const Graph = require("./Graph");
const parse = require("./parse");

module.exports = {
	create() {
		return new Graph();
	},
	parse
};
