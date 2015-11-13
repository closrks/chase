module.exports = function(server) {
    var io = require('socket.io')(server);
    console.log('Socket listening to express server');

    io.on('connection', function(socket) {
        console.log('Socket connection open', socket.id);

        socket.on('join', function(data) {
            console.log('Socket connection joined room ' + data.room);
            socket.join(data.room);
            io.to(data.room).emit('user join', {
                user: data.user
            });
        });

        socket.on('send message', function(data) {
            console.log('Socket sending ' + data.room + ' room message');
            io.to(data.room).emit('new message', {
                user: data.user,
                message: data.message
            });
        });

        socket.on('leave', function(data) {
            console.log('Socket connection left room ' + data.room);
            socket.leave(data.room);
            io.to(data.room).emit('user leave', {
                user: data.user
            });
        });

    });
};
