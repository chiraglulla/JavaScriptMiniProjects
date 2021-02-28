var _0xc462=["\x43","\x41","\x42"]
const correctAnswers=[_0xc462[0],_0xc462[1],_0xc462[2],_0xc462[0]]
const form = document.querySelector('.quiz-form')
const resultSection = document.querySelector('.result')
let questionBlocks = Array.from(form.children)
questionBlocks.pop()
let numberOfQuestions = 4

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let userScore = 0
    let correctIndexes = [] 
    let wrongIndexes = []
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    userAnswers.forEach((answer, index) => {
        if(answer == correctAnswers[index]){
            correctIndexes.push(index)
        }else{
            wrongIndexes.push(index)
        }
    })

    correctIndexes.forEach((index) => {
        questionBlocks[index].classList.add("border", "border-success", "rounded", "p-5")
    })
    wrongIndexes.forEach((index) => {
        questionBlocks[index].classList.add("border", "border-danger", "rounded", "p-5")
    })

    userScore = (correctIndexes.length/numberOfQuestions)*100
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