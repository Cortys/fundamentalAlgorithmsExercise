"use strict";

const PriorityQueue = require("fastpriorityqueue");

// Custom percolateUp implementation, since fastpriorityqueue does not offer one
// that returns the new position of the percolated element.
function percolateUp(queue, i) {
	const myval = queue.array[i];

	while(i > 0) {
		const p = i - 1 >> 1; // eslint-disable-line no-bitwise
		const ap = queue.array[p];

		if(!queue.compare(myval, ap))
			break;

		queue.array[i] = ap;
		i = p;
	}

	queue.array[i] = myval;

	return i;
}

function dijkstra(graph, start) {
	const distance = new Map();
	const marked = new WeakSet();
	const index = new WeakMap();
	const queue = new PriorityQueue((a, b) => distance.get(a) < distance.get(b));

	graph.nodes.forEach(node => distance.set(node, Infinity));
	distance.set(start, 0);

	queue.heapify([...graph.nodes]);
	queue.array.forEach((node, index) => marked.set(node, index));

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
			index.set(neighbor, percolateUp(queue, index.get(neighbor)));
		});
	}

	return distance;
}

module.exports = dijkstra;
