const io = require('socket.io')(6201, {
    cors: {
        origin: '*',
    }
})

const users = {}

io.on('connection', (socket) => {
    console.log('on connections server - new user')
    // socket.emit('chat-message', 'you are connected to chat server')
    socket.on('new-user', user => {
        users[socket.id] = user
        socket.broadcast.emit('user-connected', user)
    })
    socket.on('send-chat-message', (chat) => {
        console.log('from client', chat)
        socket.broadcast.emit('chat-message', {chat: chat, name: users[socket.id]}) //will send to every other client connect but to the one who sends
    })
    socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnected', users[socket.id])
        delete users[socket.id]
    })
})
