var electron = require('../node_modules/electron-prebuilt');
var proc = require('child_process');

var child = proc.spawn(electron, process.argv.slice(2), {stdio: 'inherit'});
child.on('close', function (code) {
  process.exit(code)
});

console.log(child);