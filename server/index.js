var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    path = require('path'),
    bodyParser = require('body-parser'),
    exphbs = require('express-handlebars'),
    io = require('socket.io')(server);

// set view
app.set('views', path.join(__dirname, '/views'));
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

// start middleware
app.use(bodyParser.json());

// serve pages
app.get('/', function(res, res, next) {
    res.render('home')
});

// api
app.post('/clear', function(req, res, next) {
    io.emit('clear room post', {});
    res.status(200).json({ success: true });
});

// socket shit
io.on('connection', function(socket) {
    console.log('browser connected');

    socket.on('subscribe', function(room) {
        console.log('joining room', room);
        socket.join(room);
    });

    socket.on('room post', function(data) {
        console.log('sending room message', data.room);
        socket.broadcast.to(data.room).emit('room post', {
            message: data.message
        });
    })
});

server.listen(3000, function() {
    console.log('app listening on port 3000');
});
