// Example of using Events in Node JS.

const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener.
emitter.on('messageLogged', function() {
    console.log('Listener called')
});

// Raise an event name messageLogged
emitter.emit('messageLogged');