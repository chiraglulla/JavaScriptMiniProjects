const addField = document.querySelector('.add')
const list = document.querySelector('.works')
const search = document.querySelector('#search')

const getTemplate = function(work){
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${work}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
    `
    list.innerHTML += html
}

//filter
const filterTodos = function(term){
    Array.from(list.children)
    .filter(work => !work.textContent.toLowerCase().includes(term))
    .forEach(work => work.classList.add('filtered'));

    Array.from(list.children)
    .filter(work => work.textContent.toLowerCase().includes(term))
    .forEach(work => work.classList.remove('filtered'));
}


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

//search work
search.addEventListener('keyup', () => {
    let term = search.value.trim().toLowerCase()
    // console.log(term)
    filterTodos(term)
})

