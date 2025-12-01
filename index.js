import { questions } from './questions.js';

const startScreen = document.getElementById('start-screen')
const quizScreen = document.getElementById('quiz-screen')

const startBtn = document.getElementById('start-btn')

const questionText = document.getElementById('question-text')
const questionBtns = document.querySelectorAll('.btn-answer')


let questionIndex;
let timer;

startBtn.addEventListener('click', () => {
    startScreen.style.display = 'none'
    quizScreen.style.display = 'block'

    questionIndex = 0
    timer = 0

    questionText.textContent = questions[questionIndex].question

    for (let i = 0; i < questionBtns.length; i++) {
        questionBtns[i].textContent = questions[questionIndex].answers[i].text;
    }    
})