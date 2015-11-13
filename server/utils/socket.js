module.exports = function(server) {
    var io = require('socket.io')(server);
    console.log('Socket listening to express server');

    io.on('connection', function(socket) {
        console.log('Socket connection open', socket.id);

        socket.on('subscribe', function(room) {
            console.log('Socket connection joined room ' + room);
            socket.join(room);
        });

        socket.on('send message', function(data) {
            console.log('Socket sending ' + data.room + ' room message');
            io.to(data.room).emit('new message', {
                message: data.message
            });
        });

    });
};
