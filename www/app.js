//this file is run by Node.js (usage: node app.js) to run the javascript server.

var express = require('express');
var path = require('path');
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');
var register = require('./routes/apiRegister.js');
//var socket = require('socket.io');

var routes = require('./routes/index');
//var users = require('./routes/users');

var app = module.exports = express();
// view engine setup
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 8000);
app.set('views', __dirname + '\\views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

/// catch 404 and forwarding to error handler


app.use('/', routes);

var server = http.createServer(app);
//var io = require('socket.io')(server);
//io.sockets.on('connection', socket);
register.registerAll(app);
server.listen(app.get('port'));
server.on('listening', function(){
    console.log("Express server listening on port "+ app.get('port'));
});