export const questions = [
    {
        question: 'Which team won the NBA Championship in 2023?',
        answers: [
            { text: 'Miami Heat', correct: false },
            { text: 'Denver Nuggets', correct: true },
            { text: 'Boston Celtics', correct: false },
            { text: 'Phoenix Suns', correct: false },
        ]
    },
    {
        question: 'Who is the all-time leading scorer in NBA history?',
        answers: [
            { text: 'Michael Jordan', correct: false },
            { text: 'LeBron James', correct: true },
            { text: 'Kareem Abdul-Jabbar', correct: false },
            { text: 'Kobe Bryant', correct: false },
        ]
    },
    {
        question: 'Which team drafted Stephen Curry?',
        answers: [
            { text: 'Los Angeles Lakers', correct: false },
            { text: 'New York Knicks', correct: false },
            { text: 'Golden State Warriors', correct: true },
            { text: 'Milwaukee Bucks', correct: false },
        ]
    },
    {
        question: 'Which player is known as “The Greek Freak”?',
        answers: [
            { text: 'Luka Dončić', correct: false },
            { text: 'Giannis Antetokounmpo', correct: true },
            { text: 'Nikola Jokić', correct: false },
            { text: 'Kristaps Porziņģis', correct: false },
        ]
    },
    {
        question: 'How many players does one NBA team have on the court at the same time?',
        answers: [
            { text: '4', correct: false },
            { text: '5', correct: true },
            { text: '6', correct: false },
            { text: '7', correct: false },
        ]
    },
    {
        question: 'Which team does Luka Dončić play for?',
        answers: [
            { text: 'Miami Heat', correct: false },
            { text: 'Dallas Mavericks', correct: true },
            { text: 'Chicago Bulls', correct: false },
            { text: 'Atlanta Hawks', correct: false },
        ]
    },
    {
        question: 'Which player had the nickname “Black Mamba”?',
        answers: [
            { text: 'Kobe Bryant', correct: true },
            { text: 'Kevin Durant', correct: false },
            { text: 'Tracy McGrady', correct: false },
            { text: 'Allen Iverson', correct: false },
        ]
    },
    {
        question: 'Which team drafted LeBron James with the No. 1 pick in 2003?',
        answers: [
            { text: 'Boston Celtics', correct: false },
            { text: 'Cleveland Cavaliers', correct: true },
            { text: 'Los Angeles Clippers', correct: false },
            { text: 'Detroit Pistons', correct: false },
        ]
    },
    {
        question: 'What does “NBA” stand for?',
        answers: [
            { text: 'National Basket Association', correct: false },
            { text: 'North Basketball Alliance', correct: false },
            { text: 'National Basketball Association', correct: true },
            { text: 'New Basketball Association', correct: false },
        ]
    },
    {
        question: 'Who won the MVP award in 2024?',
        answers: [
            { text: 'Stephen Curry', correct: false },
            { text: 'Jayson Tatum', correct: false },
            { text: 'Nikola Jokić', correct: true },
            { text: 'Joel Embiid', correct: false },
        ]
    }
];


questionBtns[i].addEventListener('click', () => {
    if (questions[questionIndex].answers[i].correct === true) {
        points += 1
    }
    questionIndex += 1
    if (questionIndex >= questions.length) {
        quizScreen.style.display = 'none'
        resultScreen.style.display = 'block'
    } else {
        questionText.textContent = questions[questionIndex].question
        for (let i = 0; i < questionBtns.length; i++) {
            questionBtns[i].textContent = questions[questionIndex].answers[i].text
        }
    }
})