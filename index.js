import { questions } from './questions.js';

const startScreen = document.getElementById('start-screen')
const quizScreen = document.getElementById('quiz-screen')

const startBtn = document.getElementById('start-btn')


let questionIndex;
let timer;

startBtn.addEventListener('click', () => {
    startScreen.style.display = 'none'
    quizScreen.style.display = 'block'

    questionIndex = 0
    timer = 0
})