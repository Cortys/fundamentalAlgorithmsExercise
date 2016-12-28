"use strict";

function bellmanFord(graph, start) {
	const distance = new Map();

	graph.nodes.forEach(node => distance.set(node, Infinity));
	distance.set(start, 0);

	for(let i = 0; i < graph.nodes.length; i++) {
		let foundShorterDistance = false;

		graph.nodes.forEach(from => {
			const nodeDist = distance.get(from);

			from.neighbors.forEach((weight, to) => {
				const newDist = nodeDist + weight;

				if(distance.get(to) <= newDist)
					return;

				distance.set(to, newDist);
				foundShorterDistance = true;
			});
		});

		if(foundShorterDistance === undefined)
			break;

		if(i === graph.nodes.length - 1)
			throw new Error("The given graph contains a negative edge cycle.");
	}

	return distance;
}

module.exports = bellmanFord;
