"use strict";

const fs = require("fs");

const { parse } = require("./graph");

const inputData = fs.readFileSync(process.argv[2], "utf8");

const graph = parse(inputData);

console.log(graph.getNode(0));
