const EventEmitter = require('events');
const emitter = new EventEmitter();

var url = 'http://mylogger.io/log';

function log(message) {
    console.log('message');

    // Raise an event name messageLogged
    emitter.emit('messageLogged', {id: 1, url: 'http://' });
}

module.exports = log;