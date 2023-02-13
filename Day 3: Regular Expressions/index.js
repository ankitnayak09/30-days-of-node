// 2 Ways

// 1) RegExp literals: pattern enclosed between /(slashes)
var reg = /ab*/;

// 2) Calling Constructor Function: pattern comes within constructor funtion RegExp
var reg = new RegExp("ab*");

// match => a,  ab, abb,    abbbb,  abbbbbbbb and so on
// But will not match b,bc,abc,aba, etc.

// Most Common Examples

// 1) Find Specific Text

var fs = require("fs");
var filename = "data.txt";
var str = fs.readFileSync(filename).toString();
var pattern = /man/gim; // g:global scope, i:case insensitive, m: multiline match
var myarray = str.match(pattern);
var len = myarray.length;
console.log("Occurrences of pattern in the string is : " + len);

// 2) Find number of tags using RegExp
var filename2 = "data.html";
var str2 = fs.readFileSync(filename2).toString();
var pattern2 = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;

var myarray2 = str2.match(pattern2);
var len2 = myarray2.length;
console.log("Occurrences of pattern in the string is : " + len2);

// 3) Validating emails using RegExp
// @(1 occurence), domain is provided, sub-domain,etc.
var str3 = "rjbitdemo@gmail.com";
var pattern3 =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

var res = str3.match(pattern3);
if (res) {
	console.log("Valid email address");
} else {
	console.log("Please enter a valid email address");
}

// 4) Validating Hexadecimal Number using RegExp

var str4 = "FFFFFF";
var pattern4 = /^[a-fA-F0-9]+$/g;

var res = str4.match(pattern4);
if (res) {
	console.log("Valid Hexadecimal number");
} else {
	console.log("Not a valid Hexadecimal number");
}

// 5) Validating Password
// 1 Capital Letter [A-Z]
// 1 Small letter [a-z]
// 1 number [0-9]
// 1 special character [!,@,#,$,%,^,...] etc
// length within range [6 to 16]

var str = "Aa#1aaabcde";
var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

var res = str.match(pattern);
if (res) {
	console.log("Valid password");
} else {
	console.log("Not a valid password");
}
