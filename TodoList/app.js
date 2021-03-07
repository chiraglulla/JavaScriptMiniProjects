const addField = document.querySelector('.add')
const list = document.querySelector('.works')


const getTemplate = function(work){
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${work}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
    `
    list.innerHTML += html
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