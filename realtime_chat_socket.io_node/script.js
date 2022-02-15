const socket = window.io('http://localhost:6201') //this is come as part of socket.io exposing an io object in js

const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

const user = prompt('what is your name?')
appendChat('Welcome, ' + user)
socket.emit('new-user', user)

socket.on('chat-message', (msg) => {
    // console.log('on connections - new user')
    // console.log('receiving - ', msg)
    appendChat(`${msg.name}: ${msg.chat}`)
})
socket.on('user-connected', user => {
    appendChat(`${user} user joined`)
})
socket.on('user-disconnected', user => {
    appendChat(`${user} disconnected`)
})

messageForm.addEventListener('submit', e => {
    e.preventDefault()
    let msg = messageInput.value
    appendChat(`you: ${msg}`)
    socket.emit('send-chat-message', msg)
})

function appendChat(msg) {
    const messageElement = document.createElement('div')
    messageElement.innerText = msg
    messageContainer.append(messageElement)
}