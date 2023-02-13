var fs = require("fs");
fs.renameSync("data.txt", "newData.txt");
console.log("File renamed successfully");

// To Check it's Synchronous nature !
console.log("This Method is Synchronous");
