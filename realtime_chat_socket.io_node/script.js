const socket=window.io('http://localhost:6201') //this is come as part of socket.io exposing an io object in js
const messageForm=document.getElementById('send-container')
const messageInput=document.getElementById('message-input')

socket.on('chat-message',(msg)=>{
    console.log('on connections - new user')
    console.log('receiving - ', msg)
})

messageForm.addEventListener('submit',e=>{
    e.preventDefault()
    socket.emit('send-chat-message',messageInput.value)
})