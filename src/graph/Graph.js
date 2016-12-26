"use strict";

const Node = require("./Node");

class Graph {
	constructor() {
		this.nodes = [];
	}

	addNode() {
		const node = new Node();

		node.id = this.nodes.length;
		this.nodes.push(node);

		return node;
	}

	getNode(id) {
		return this.nodes[id];
	}
}

module.exports = Graph;
