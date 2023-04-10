// Encryption using createCipher
// Decryption using createDecipher

// Same key is used for both encryption and decryption

var crypto = require("crypto"),
	algorithm = "aes-256-ctr",
	password = "RJ23edrf";
// "aes-256-cbc" is advance encryption standard we are using for encryption
// Text is the confidential data which we need to encrypt using 'password' (Key)

function encrypt(text) {
	var cipher = crypto.createCipher(algorithm, password);
	var crypted = cipher.update(text, "utf-8", "hext");
	crypted += cipher.final("hex");
	return crypted;
}

// Text is the Cipher which we need to decrypt using 'password'(Key)
function decrypt(text) {
	var decipher = crypto.createDecipher(algorithm, password);
	var dec = decipher.update(text, "hex", "utf-8");
	dec += decipher.final("utf-8");
	return dec;
}

// Actual Content
var text = "Nodejsera for all web development languages";
// Calling the encrypt function and printing the encrypted content
var e = encrypt(text);
console.log(e);
// Calling the decrypt function and printing the decrypted content
var d = decrypt(e);
console.log(d);
