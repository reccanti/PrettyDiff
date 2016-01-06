//console.log(process.argv);
var fs = require("fs");

var local = fs.readFileSync(process.argv[2], "utf8");
var remote = fs.readFileSync(process.argv[3], "utf8");

console.log(local);
console.log(remote);



























var r;