import { questions } from './questions.js';

const startScreen = document.getElementById('start-screen')
const quizScreen = document.getElementById('quiz-screen')
const resultScreen = document.getElementById('result-screen')

const startBtn = document.getElementById('start-btn')
const nextBtn = document.getElementById('next-btn')

const questionText = document.getElementById('question-text')
const questionBtns = document.querySelectorAll('.btn-answer')

const score = document.getElementById('score-text')
const passFail = document.getElementById('pass-fail-text')
const restartButton = document.getElementById('restart-btn')
const timeText = document.getElementById('time-text')

let questionIndex;
let timer;
let points;
let seconds;
let formattedTime;


for (let i = 0; i < questionBtns.length; i++) {
    questionBtns[i].addEventListener('click', () => {

        const selectedAnswer = questions[questionIndex].answers[i].correct

        if (selectedAnswer) {
            points += 1
            questionBtns[i].classList.add('correct')
        } else {
            questionBtns[i].classList.add('incorrect')
        }


        questionIndex += 1

        questionBtns.forEach(btn => {
            btn.disabled = true

            nextBtn.addEventListener('click', () => {
                btn.disabled = false

                if (questionIndex >= questions.length) {
                    quizScreen.style.display = 'none'
                    resultScreen.style.display = 'block'
                    clearInterval(timer)
                    screenHandler()
                } 
    
                showQuestion()
            })
        })

    });
}

const screenHandler = () => {
score.textContent = `Your score: ${points} out of 10`

timeText.textContent = `Your time: ${formattedTime}`

if (points >= 6) {
    passFail.style.color = 'green'
    passFail.textContent = 'You passed!'
} else if (points < 6) {
    passFail.style.color = 'red'
    passFail.textContent = 'You failed!'
}
}




startBtn.addEventListener('click', () => {
    startScreen.style.display = 'none'
    quizScreen.style.display = 'block'

    questionIndex = 0
    timer = 0
    points = 0
    seconds = 0;
    formattedTime = "0:00";


    timer = setInterval(() => {
        points = points

        seconds++

        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60

        formattedTime = `${mins}:${secs.toString().padStart(2, '0')}`;
    }, 1000) 

   
    showQuestion() 
})





const showQuestion = () => {
    questionText.textContent = questions[questionIndex].question;

    
    for (let i = 0; i < questionBtns.length; i++) {
        questionBtns[i].classList.remove('correct', 'incorrect')

        questionBtns[i].textContent = questions[questionIndex].answers[i].text;
    }
};



const restartOn = () => {
    restartButton.addEventListener('click', () => {
        points = 0
    questionIndex = 0
    startScreen.style.display = 'block'
    resultScreen.style.display = 'none'
    })
}

restartOn()