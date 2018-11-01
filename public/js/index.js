let socket = io();
socket.on('connect', () => {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: "Mike",
        text: "Hey. Yes we can"
    });
});
socket.on('disconnect', () => {
    console.log('Disconnected from server');
});

socket.on('newEmail', (email) => {
    console.log('New email', email);
});

socket.on('newMessage', (message) => {
    console.log('Got New Message', message);
});