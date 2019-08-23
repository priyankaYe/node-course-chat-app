const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const{generateMessage} =  require('./utils/message');

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


    socket.on('createMessage',(newMessage)=>{
        console.log('createMessage',newMessage);
        io.emit('newMessage',generateMessage(newMessage.from,newMessage.text));
        // socket.broadcast.emit('newMessage',{
        //     from:newMessage.from,
        //     text:newMessage.text,
        //     createdAt:new Date().getTime()
        // });

    });

    socket.on('disconnect',()=>{
        console.log('client disconnected');
    });
});


