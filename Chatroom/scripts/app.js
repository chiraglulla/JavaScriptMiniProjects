const chatList = document.querySelector('.chat-list')

const chatUI = new ChatUI(chatList)
const chatroom = new ChatRoom('general', 'kunal')
chatroom.getChats(data => chatUI.render(data))