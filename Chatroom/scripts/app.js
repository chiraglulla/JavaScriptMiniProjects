const chatWindow = document.querySelector('.chat-window')
const chatList = document.querySelector('.chat-list')
const newChat = document.querySelector('.new-chat')
const newName = document.querySelector('.new-name')
const updateMssg = document.querySelector('.update-mssg')
const rooms = document.querySelector('.chat-rooms')

newChat.addEventListener('submit', e => {
    e.preventDefault()
    const message = newChat.message.value.trim()
    chatroom.addChat(message)
        .then(() => newChat.reset())
        .catch(e => console.log(err))
})

newName.addEventListener('submit', e => {
    e.preventDefault()
    const newUsername = newName.name.value.trim()
    chatroom.updateName(newUsername)
    newName.reset()

    updateMssg.innerText = `Your name was updated to ${newUsername}`
    setTimeout(() => updateMssg.innerText = '', 2000)
})

rooms.addEventListener('click', e => {
    if(e.target.tagName === "BUTTON"){
        chatUI.clear() 
        chatroom.updateRoom(e.target.getAttribute('id'))
        chatroom.getChats(data => chatUI.render(data))
    }
})

const username = localStorage.username ? localStorage.username : "Anonymous"

const chatUI = new ChatUI(chatList)
const chatroom = new ChatRoom('general', username)
chatroom.getChats(data => chatUI.render(data))