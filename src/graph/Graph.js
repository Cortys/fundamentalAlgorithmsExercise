"use strict";

const Node = require("./Node");

const nodes = Symbol("nodes");

class Graph {
	constructor() {
		this[nodes] = [];
	}

	addNode(data) {
		const node = new Node(data);

		this[nodes].push(node);

		return node.id = this[nodes].length - 1;
	}

	getNode(id) {
		return this[nodes][id];
	}
}

module.exports = Graph;
