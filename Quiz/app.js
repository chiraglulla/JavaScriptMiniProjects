const correctAnswers = ['B', 'B', 'B', 'B']
const form = document.querySelector('.quiz-form')
const resultSection = document.querySelector('.result')
let numberOfQuestions = 4

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let html = ""
    let userScore = 0
    let correctCount = 0
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    userAnswers.forEach((answer, index) => {
        if(answer == correctAnswers[index]){
            correctCount++
        }
    })
    userScore = (correctCount/numberOfQuestions)*100
    html+=`<div class="container lead">
             <p class="text-white display-4">You are <span class="text-success display-3 p-3">${userScore}%</span> OP</p>
           </div>`
    resultSection.innerHTML = html
    resultSection.classList.remove('d-none')
})