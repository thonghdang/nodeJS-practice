
// This module contain the function log(message) that will print out the message on the console.

function log(message, name) {
    // print a message on console.
    console.log(message + " " + name + "!");

}

// exported_log is the name of the function log that will be called outside this modules.
module.exports.exported_log = log;
