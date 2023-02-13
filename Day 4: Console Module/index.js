// console module exports 2 Components:

// 1 ) Console Class: console.log(), console.warn(), console.error() which we can use to write to node.js streams.

// 2 ) Global console instance: method is configured to write on process.stderr, process.stdout() and it can be used without exclusively calling the module require('console')

// console.log() => print to stdout with a newline.

// Creating a new console where stdout will store the output and stderr.log will store the errors (if any)

var ws = require("fs");
const { Console } = require("console");
const output = ws.createWriteStream("./stdout.log");
const errOutput = ws.createWriteStream("./stderr.log");
// custom simple print
const print = new Console(output, errOutput);
//Now we can use it like console
const roll = 839147;
print.log("roll: %d", roll);
print.log("This will be stored in a file");
