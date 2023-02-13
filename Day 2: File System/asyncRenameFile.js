var fs = require("fs");
// We have to pass the Relative path of the file from the Current Working Directory.
fs.rename("data.txt", "new_data.txt", (err) => {
	if (err) throw err;
	console.log("File Renamed Successfully");
});

// To Check It's Asynchronous Nature!
console.log("This Method is Asynchronous");
