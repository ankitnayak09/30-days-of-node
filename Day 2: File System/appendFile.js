// Appending a File Asynchrously

var fs = require('fs');
new data = "This data will be appended at the end of the file.";
fs.appendFile('input.txt', new_data, (err) => {
    if(err) throw err;
    console.log('The new_content was appended successfully');
});
// Synchronously

fs.appendFileSync('input.txt', content);
console.log("File Appended Successfully");