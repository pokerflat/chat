var socket=io.connect();
let message= {
    message: 'hi',
    name: 'alex'
};

socket.on('connect', function() {
    console.log('Подключились к серверу');
});

socket.emit('message', {message: message, user: name});