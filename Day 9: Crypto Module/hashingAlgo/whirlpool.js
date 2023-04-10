// ! Not Working

// Whirlpool Hashing Algo
// input < 2^256 bits and Output = 512-bit hash
var crypto = require("crypto");
//creating hash object
var hash = crypto.createHash("whirlpool");
//passing the data to be hashed
data = hash.update("nodejsera", "utf-8");
//Creating the hash in the required format
gen_hash = data.digest("hex");
//Printing the output on the console
console.log("hash : " + gen_hash);
