const correctAnswers = ['B', 'B', 'B', 'B']
const form = document.querySelector('.quiz-form')
const resultSection = document.querySelector('.result')
let numberOfQuestions = 4

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let userScore = 0
    let correctCount = 0
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]
    userAnswers.forEach((answer, index) => {
        if(answer == correctAnswers[index]){
            correctCount++
        }
    })
    userScore = (correctCount/numberOfQuestions)*100
    scrollTo(0, 0)
    resultSection.classList.remove('d-none')
    let output = 0
    const timer = setInterval(()=>{
        resultSection.querySelector('span').textContent =`${output}%`
        if(output === userScore)
            clearInterval(timer)
        else
            output++
    }, 8)
})