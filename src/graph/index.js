"use strict";

const Graph = require("./Graph");
const parse = require("./parse");

module.exports = {
	create(nodes) {
		return new Graph(nodes);
	},
	parse
};
