"use strict";

const edges = Symbol("edges");

class Node {
	constructor(data) {
		this[edges] = new Map();
		this.data = data;
	}

	addEdgeTo(node, data) {
		if(!(node instanceof Node))
			throw new TypeError("Only nodes can be the target of edges.");

		if(this[edges].has(node))
			throw new ReferenceError("The given node is already connected to this node.");

		this[edges].set(node, data);
	}
}

module.exports = Node;
