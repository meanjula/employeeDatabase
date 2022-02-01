"use strict";

//console.log(process.argv);
const [, , ...tail] = process.argv;
// console.log(tail);

// const [, , createStatementFile, ...rest] = process.argv;
// console.log("file", createStatementFile);
// console.log(rest);

const [, , createStatementFile] = process.argv;
console.log("file", createStatementFile);

if (createStatementFile) {
  console.log("file", createStatementFile);
}
if (process.argv.length > 2) {
  console.log(process.argv[2]);
}
