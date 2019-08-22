const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

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
    socket.on('disconnect',()=>{
        console.log('client disconnected');
    });
});


