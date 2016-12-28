"use strict";

const Node = require("./Node");

class Graph {
	constructor(nodes) {
		this.nodes = nodes || [];
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

	clone() {
		const clone = new Graph();

		for(let i = 0; i < this.nodes.length; i++)
			clone.addNode();

		this.nodes.forEach(from => {
			const cloneFrom = clone.getNode(from.id);

			from.neighbors.forEach((data, to) => {
				cloneFrom.connectTo(clone.getNode(to.id), data);
			});
		});

		return clone;
	}
}

module.exports = Graph;
