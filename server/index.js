var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    path = require('path'),
    bodyParser = require('body-parser'),
    exphbs = require('express-handlebars');

var port = process.env.PORT || 3000;

// set view
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({
    // defaultLayout: 'main', // don't want a main layout
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

// parse params, query, body
app.use(bodyParser.json());

app.use(require('./routes/login'));

// HTTP
server.listen(port, function() {
    console.log('Express server listening on port ' + port);
});

// SOCKET.IO
require('./utils/socket')(server);
