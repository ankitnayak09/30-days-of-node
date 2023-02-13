var fs = require("fs");

var content = "We are writing this file synchrously using node.js";

fs.writeFileSync("content.txt", content);
console.log("File Written Successfully");
