var fs = require("fs");
var filename = "content.txt";
fs.unlink(filename, (err) => {
	if (err) throw err;
	console.log("file deleted successfully");
});
