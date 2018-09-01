// Working with File System module example. 

const fs = require('fs');

const current_files = fs.readdirSync('./');
const parent_files = fs.readdirSync('../');

console.log(`Current directory has: `)
console.log(current_files);

console.log(`Parent directory has: `);
console.log(parent_files);

// Asynchronous method with errors handling.
console.log(`This is asynchronous method with error handling: `)
fs.readdir('$', function(err, parent_files) {
    if (err) console.log('This is an example of error', err);
    else console.log('Result', parent_files)
})

fs.readdir('./', function(err, current_files) {
    if (err) console.log('Error', err);
    else console.log('Result', current_files)
}) 