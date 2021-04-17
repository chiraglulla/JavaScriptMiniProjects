class ChatUI{
    constructor(list){
        this.list = list
    }

    render(data) {
        const html = `
            <li class="list-group-item">
                <span id="username">${data.username}</span>
                <span id="message">${data.message}</span>
                <span id="time">${data.created_at.toDate()}</span>
            </li>
        `

        this.list.innerHTML += html 
    }
}