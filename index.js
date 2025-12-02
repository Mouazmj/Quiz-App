import { questions } from './questions.js';

const startScreen = document.getElementById('start-screen')
const quizScreen = document.getElementById('quiz-screen')
const resultScreen = document.getElementById('result-screen')

const startBtn = document.getElementById('start-btn')
const nextBtn = document.getElementById('next-btn')

const questionText = document.getElementById('question-text')
const questionBtns = document.querySelectorAll('.btn-answer')


let questionIndex;
let timer;
let points;

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
                } 
    
                showQuestion()
            })
        })

    });
}


startBtn.addEventListener('click', () => {
    startScreen.style.display = 'none'
    quizScreen.style.display = 'block'

    questionIndex = 0
    timer = 0
    points = 0

   
    showQuestion() 
})





const showQuestion = () => {
    questionText.textContent = questions[questionIndex].question;

    
    for (let i = 0; i < questionBtns.length; i++) {
        questionBtns[i].classList.remove('correct', 'incorrect')

        questionBtns[i].textContent = questions[questionIndex].answers[i].text;
    }
};



console.log(questionIndex)