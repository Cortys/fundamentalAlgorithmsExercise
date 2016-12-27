"use strict";

const fs = require("fs");

const { parse } = require("./graph");
const { dijkstra } = require("./shortestPath");

const inputData = fs.readFileSync(process.argv[2], "utf8");

const graph = parse(inputData);

const start = 0;

dijkstra(graph, graph.getNode(start)).forEach((distance, node) => console.log(`${start} -> ${node.id}: ${distance}`));
