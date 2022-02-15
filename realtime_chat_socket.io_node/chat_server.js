const io = require('socket.io')(6201, {
    cors: {
        origin: '*',
    }
})

io.on('connection', (socket) => {
    console.log('on connections server - new user')
    // socket.emit('chat-message', 'you are connected to chat server')

    socket.on('send-chat-message', (chat) => {
        console.log('from client', chat)
        socket.broadcast.emit('chat-message', chat) //will send to every other client connect but to the one who sends
    })
})
