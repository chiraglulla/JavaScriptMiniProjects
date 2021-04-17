class ChatRoom {
    constructor(room, username) {
        this.room = room
        this.username = username
        this.chats = db.collection('chats')
        this.unsubscribe;
    }

    async addChat(message) {
        const now = new Date()
        const chat = {
            message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        }

        const response = await this.chats.add(chat)
        return response
    }

    getChats(render) {
        this.unsubscibe = this.chats
            .where('room', '==', this.room)
            .orderBy('created_at')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    render(change.doc.data())
                })
            })
    }

    updateName(username){
        this.username = username
    }

    updateRoom(room) {
        this.room = room
        console.log("room updated")
        if(this.unsub)
            this.unsubscibe()
    }
}