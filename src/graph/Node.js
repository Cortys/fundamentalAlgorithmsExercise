"use strict";

class Node {
	constructor() {
		this.neighbors = new Map();
	}

	connectTo(node, data) {
		if(!(node instanceof Node))
			throw new TypeError("Only nodes can be the target of edges.");

		if(this.neighbors.has(node))
			throw new ReferenceError("The given node is already connected to this node.");

		this.neighbors.set(node, data);
	}
}

module.exports = Node;
