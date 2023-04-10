// md5 hashing algorithm
// MD5 => Message Digest 5
// produces 128-bit hashes

var crypto = require("crypto");

// Creating hash object
var hash1 = crypto.createHash("md5");
// passing the data to be hashed
data = hash1.update("nodejsera", "utf-8");
// Creating the hash in the required format
gen_hash = data.digest("hex");
// Printing the output on the console
console.log("hash: " + gen_hash);
