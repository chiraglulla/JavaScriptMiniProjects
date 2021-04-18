class ChatUI{
    constructor(list){
        this.list = list
    }

    clear(){
        this.list.innerHTML =''
    }

    render(data) {
        const when = dateFns.distanceInWordsToNow(
            data.created_at.toDate(),
            { addSuffix: true }
        )
        const html = `
            <li class="list-group-item">
                <span id="username">${data.username}</span>
                <span id="message">${data.message}</span>
                <div id="time">${when}</div>
            </li>
        `

        this.list.innerHTML += html 
    }
}