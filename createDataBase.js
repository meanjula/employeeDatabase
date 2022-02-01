"use strict";

const Databse = require("./database");

let createStatementFile = "./createStatements.json";

if (process.argv.length > 2) {
  createStatementFile = `./${process.argv[2]}`;
}

try {
  createDb(require(createStatementFile));
} catch (err) {
  console.log(err);
}

async function createDb(createStatements) {
  console.log(createStatements);
}
