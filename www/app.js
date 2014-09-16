//this file is run by Node.js (usage: node app.js) to run the javascript server.

var express = require('express');
var path = require('path');
var http = require('http');
//var socket = require('socket.io');

var routes = require('./routes/index');
//var users = require('./routes/users');

var app = module.exports = express();
// view engine setup
app.set('port', process.env.PORT || 8000);
app.set('views', __dirname + '\\views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

/// catch 404 and forwarding to error handler


app.use('/', routes);

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
var server = http.createServer(app);
//var io = require('socket.io')(server);
//io.sockets.on('connection', socket);

server.listen(app.get('port'));
server.on('listening', function(){
    console.log("Express server listening on port "+ app.get('port'));
});