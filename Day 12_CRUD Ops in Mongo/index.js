// including the required packages
var mongo = require("mongodb").MongoClient;
// Establishing the connection
var new_db = "mongodb://localhost:27017/demo_db";

mongo.connect(new_db, (error, db) => {
	if (error) {
		throw error;
	}
	console.log("Database demo_db created successfully");
	// To Close the Connection
	db.close();
});
