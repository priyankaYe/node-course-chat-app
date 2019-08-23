const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const{generateMessage,generateLocationMessage} =  require('./utils/message');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app = express();
app.use(express.static(publicPath));

var server = http.createServer(app);
server.listen(port,()=>{
    console.log('started app on ',port);   
});

var io = socketIO(server);
io.on('connection',(socket) =>{
    console.log('New user connected');

    socket.emit('newMessage',generateMessage('Admin','Welcome to Chat room..'));

    socket.broadcast.emit('newMessage',generateMessage('Admin','New user joined'));


    socket.on('createMessage',(newMessage,callback)=>{
        console.log('createMessage',newMessage);
        io.emit('newMessage',generateMessage(newMessage.from,newMessage.text));
        callback();       
    });

    socket.on('createLocationMessage',(coords)=>{
        console.log('Emit New message location');
        io.emit('newLocationMessage',generateLocationMessage('Admin',coords.latitude,coords.longitude));
    });


    socket.on('disconnect',()=>{
        console.log('client disconnected');
    });
});


