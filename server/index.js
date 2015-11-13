var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    path = require('path'),
    bodyParser = require('body-parser'),
    exphbs = require('express-handlebars');

var port = process.env.PORT || 8080;

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
    res.status(200).json({ success: true });
});

// HTTP
server.listen(port, function() {
    console.log('Express server listening on port ' + port);
});

// SOCKET.IO
require('./utils/socket')(server);
