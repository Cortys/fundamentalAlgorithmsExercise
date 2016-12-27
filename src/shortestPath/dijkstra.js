"use strict";

const PriorityQueue = require("fastpriorityqueue");

function dijkstra(graph, start) {
	const distance = new Map();
	const marked = new WeakSet();
	const queue = new PriorityQueue((a, b) => distance.get(a) < distance.get(b));

	graph.nodes.forEach(node => distance.set(node, Infinity));
	distance.set(start, 0);

	queue.heapify([...graph.nodes]);

	while(!queue.isEmpty()) {
		const node = queue.poll();
		const nodeDist = distance.get(node);

		marked.add(node);
		node.neighbors.forEach((weight, neighbor) => {
			if(marked.has(neighbor))
				return;

			const newDist = nodeDist + weight;

			if(distance.get(neighbor) <= newDist)
				return;

			distance.set(neighbor, newDist);
			queue._percolateUp(queue.array.indexOf(neighbor)); // eslint-disable-line no-underscore-dangle
		});
	}

	return distance;
}

module.exports = dijkstra;
