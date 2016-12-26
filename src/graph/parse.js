"use strict";

const Graph = require("./Graph");

const parseGraph = serializedGraph => {
	const graph = new Graph();

	graph.sizeDeclared = false;

	serializedGraph.split(/\s*\r?\n\s*/)
		.forEach(parseLine(graph));

	return graph;
};

const parseLine = graph => line => {
	if(line[0] === "#" || line === "")
		return;

	(graph.sizeDeclared ? parseEdgeList : parseDeclaration)(graph)(line);
};

const parseDeclaration = graph => line => {
	if(line[0] === "n") {
		const nodeCount = +line.split(/\s*=\s*/)[1];

		for(let i = 0; i < nodeCount; i++)
			graph.addNode();

		graph.nodesDeclared = true;
	}
	else if(line[0] === "m")
		graph.edgesDeclared = true;
	else
		throw new SyntaxError(`Expected a graph size declaration starting with 'n' or 'm' but got '${line[0]}'.`);

	graph.sizeDeclared = graph.nodesDeclared && graph.edgesDeclared;
};

const parseEdgeList = graph => line => {
	const [fromId, adjacencyList] = line.split(/\s*:\s*/);
	const fromNode = graph.getNode(+fromId);

	if(!fromNode)
		throw new SyntaxError(`There is no node with id ${fromId} from where an edge can start.`);

	adjacencyList.split(/\s+/).forEach(parseEdge(graph)(fromNode));
};

const parseEdge = graph => from => edge => {
	const [toId, weight] = edge.split("w");
	const toNode = graph.getNode(+toId);

	if(!toNode)
		throw new SyntaxError(`There is no node with id ${toId} where an edge can end.`);

	if(!Number.isInteger(+weight))
		throw new SyntaxError(`Edge weights have to be integers. Got '${weight}'.`);

	from.connectTo(toNode, +weight);
};

module.exports = parseGraph;
