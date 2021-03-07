const addField = document.querySelector('.add')
const list = document.querySelector('.works')
// const search = document.querySelector('#search')

const getTemplate = function(work){
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${work}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
    `
    list.innerHTML += html
}

// const filteredTodo = function(term){
//     console.log(Array.from(list.childNodes))
// }

//add work
addField.addEventListener('submit', e => {
    e.preventDefault()

    let work = addField.add.value.trim()
    if(work.length){
        getTemplate(work)
        addField.reset()
    }
})

//delete work
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentNode.remove()
    } 
})

// //search work
// search.addEventListener('keyup', () => {
//     let term = search.value.trim().toLowerCase()
//     filteredTodo(term)
// })

