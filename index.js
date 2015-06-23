//express.js framework
var express = require('express');
var app = express();

//create an http object based on express.js
var http = require('http').Server(app);

//module manage folder path
var path = require('path');

//main processing file
var chat = require('./routes/chat');

//set /public as the folder to serve static files
app.use(express.static(path.join(__dirname, 'public')));

//route / to /public/index.html
app.get('/', function(req, res){
  res.sendFile('./public/index.html');
});


//initialize all http setting in chat object
chat.initialize(http);


//listen to port 2501
http.listen(3000, function(){
  console.log('listening on *:3000');
});