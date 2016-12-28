"use strict";

const fs = require("fs");

const { parse } = require("./graph");
const { johnson } = require("./shortestPath");

const inputData = fs.readFileSync(process.argv[2], "utf8");

const graph = parse(inputData);

try {
	johnson(graph).forEach((distance, from) => {
		let output = `delta ${from.id} :`;

		distance.forEach((distance, to) => {
			if(Number.isFinite(distance))
				output += ` ${to.id}w${distance}`;
		});

		console.log(output);
	});
}
catch(err) {
	console.log("delta : negative-cycles");
}
