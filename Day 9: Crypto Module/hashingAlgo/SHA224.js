// Secure Hash Algo 224
// produces 224-bit hash value known as message digest

//Loading the crypto module in node.js
var crypto = require("crypto");
//creating hash object
var hash = crypto.createHash("sha224");
//passing the data to be hashed
data = hash.update("nodejsera", "utf-8");
//Creating the hash in the required format
gen_hash = data.digest("hex");
//Printing the output on the console
console.log("hash : " + gen_hash);
