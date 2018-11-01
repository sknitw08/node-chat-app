const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
let io = socketIO(server);


app.use(express.static(path.join(__dirname, '..', 'public')));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(port, (err)=> {
    if(!err) {
        console.log(`Connected on Port ${port}`)
    }
});