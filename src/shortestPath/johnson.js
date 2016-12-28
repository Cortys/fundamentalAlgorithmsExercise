"use strict";

const dijkstra = require("./dijkstra");
const bellmanFord = require("./bellmanFord");

function johnson(graph) {
	const tempGraph = graph.clone(); // Operate on a clone of the graph to be side-effect-free.
	const tempStart = tempGraph.addNode();

	tempGraph.nodes.forEach(node => tempStart.connectTo(node, 0));

	const bfDistance = bellmanFord(tempGraph, tempStart);

	tempGraph.nodes.pop();

	tempGraph.nodes.forEach(from => {
		const fromDist = bfDistance.get(from);

		from.neighbors.forEach((weight, to) => {
			from.neighbors.set(to, weight + fromDist - bfDistance.get(to));
		});
	});

	const distance = new Map();

	tempGraph.nodes.forEach(from => {
		const fromDist = bfDistance.get(from);
		const tempDistance = dijkstra(tempGraph, from);

		tempDistance.forEach((distance, to) => {
			tempDistance.set(to, distance - fromDist + bfDistance.get(to));
		});

		distance.set(from, tempDistance);
	});

	return distance;
}

module.exports = johnson;
