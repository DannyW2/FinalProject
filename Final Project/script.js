let startButton = document.querySelector('#start').addEventListener("click", startQuiz)

function startQuiz () {
    document.querySelector('.hide').style.display = "none"
    document.querySelector('.hidden').style.visibility = "visible"
    firstQuestion()
}


function firstQuestion() {
    document.querySelector('#question').innerHTML = questions[0].question
    document.querySelector('#answer1').innerHTML = questions[0].answers[0].text
    document.querySelector('#answer2').innerHTML = questions[0].answers[1].text
    document.querySelector('#answer3').innerHTML = questions[0].answers[2].text
    document.querySelector('#answer4').innerHTML = questions[0].answers[3].text
    let firstAnswerButton = document.querySelectorAll('.answer')
    firstAnswerButton.forEach(answerOne => {
    answerOne.addEventListener('click', firstAnswer)})
    function firstAnswer() {
        document.querySelector('#answer1').classList.add('incorrect')
        document.querySelector('#answer2').classList.add('correct')
        document.querySelector('#answer3').classList.add('incorrect')
        document.querySelector('#answer4').classList.add('incorrect')
    }
    let nextButton = document.querySelector('#next').addEventListener("click", secondQuestion)
}

function secondQuestion() {
    let clearAnswer = document.querySelectorAll('.answer')
    clearAnswer.forEach(clearAns => {
    clearAns.classList.remove('incorrect', 'correct')})
    document.querySelector('#question').innerHTML = questions[1].question
    document.querySelector('#answer1').innerHTML = questions[1].answers[0].text
    document.querySelector('#answer2').innerHTML = questions[1].answers[1].text
    document.querySelector('#answer3').innerHTML = questions[1].answers[2].text
    document.querySelector('#answer4').innerHTML = questions[1].answers[3].text
    let secondAnswerButton = document.querySelectorAll('.answer')
    secondAnswerButton.forEach(answerTwo => {
    answerTwo.addEventListener('click', secondAnswer)})
    function secondAnswer() {
        clearAnswer.forEach(clearAns => {
            clearAns.classList.remove('incorrect', 'correct')})
        document.querySelector('#answer1').classList.add('incorrect')
        document.querySelector('#answer2').classList.add('incorrect')
        document.querySelector('#answer3').classList.add('correct')
        document.querySelector('#answer4').classList.add('incorrect')
    }
    let nextButton = document.querySelector('#next').addEventListener("click", thirdQuestion)
}

function thirdQuestion() {
    let clearAnswer = document.querySelectorAll('.answer')
    clearAnswer.forEach(clearAns => {
    clearAns.classList.remove('incorrect', 'correct')})
    document.querySelector('#question').innerHTML = questions[2].question
    document.querySelector('#answer1').innerHTML = questions[2].answers[0].text
    document.querySelector('#answer2').innerHTML = questions[2].answers[1].text
    document.querySelector('#answer3').innerHTML = questions[2].answers[2].text
    document.querySelector('#answer4').innerHTML = questions[2].answers[3].text
    let thirdAnswerButton = document.querySelectorAll('.answer')
    thirdAnswerButton.forEach(answerThree => {
    answerThree.addEventListener('click', thirdAnswer)})
    function thirdAnswer() {
        clearAnswer.forEach(clearAns => {
            clearAns.classList.remove('incorrect', 'correct')})
        document.querySelector('#answer1').classList.add('correct')
        document.querySelector('#answer2').classList.add('incorrect')
        document.querySelector('#answer3').classList.add('incorrect')
        document.querySelector('#answer4').classList.add('incorrect')
    }
    let nextButton = document.querySelector('#next').addEventListener("click", fourthQuestion)
}

function fourthQuestion() {
    let clearAnswer = document.querySelectorAll('.answer')
    clearAnswer.forEach(clearAns => {
    clearAns.classList.remove('incorrect', 'correct')})
    document.querySelector('#question').innerHTML = questions[3].question
    document.querySelector('#answer1').innerHTML = questions[3].answers[0].text
    document.querySelector('#answer2').innerHTML = questions[3].answers[1].text
    document.querySelector('#answer3').innerHTML = questions[3].answers[2].text
    document.querySelector('#answer4').innerHTML = questions[3].answers[3].text
    let fourthAnswerButton = document.querySelectorAll('.answer')
    fourthAnswerButton.forEach(answerFour => {
    answerFour.addEventListener('click', fourthAnswer)})
    function fourthAnswer() {
        clearAnswer.forEach(clearAns => {
            clearAns.classList.remove('incorrect', 'correct')})
        document.querySelector('#answer1').classList.add('incorrect')
        document.querySelector('#answer2').classList.add('correct')
        document.querySelector('#answer3').classList.add('incorrect')
        document.querySelector('#answer4').classList.add('incorrect')
    }
    let nextButton = document.querySelector('#next').addEventListener("click", fifthQuestion)
}

function fifthQuestion() {
    let clearAnswer = document.querySelectorAll('.answer')
    clearAnswer.forEach(clearAns => {
    clearAns.classList.remove('incorrect', 'correct')})
    document.querySelector('#question').innerHTML = questions[4].question
    document.querySelector('#answer1').innerHTML = questions[4].answers[0].text
    document.querySelector('#answer2').innerHTML = questions[4].answers[1].text
    document.querySelector('#answer3').innerHTML = questions[4].answers[2].text
    document.querySelector('#answer4').innerHTML = questions[4].answers[3].text
    let fifthAnswerButton = document.querySelectorAll('.answer')
    fifthAnswerButton.forEach(answerFive => {
    answerFive.addEventListener('click', fifthAnswer)})
    function fifthAnswer() {
        clearAnswer.forEach(clearAns => {
            clearAns.classList.remove('incorrect', 'correct')})
        document.querySelector('#answer1').classList.add('incorrect')
        document.querySelector('#answer2').classList.add('incorrect')
        document.querySelector('#answer3').classList.add('incorrect')
        document.querySelector('#answer4').classList.add('correct')
    }
    document.querySelector('#next').style.visibility = 'hidden'
}

const questions = [
    {question: "Who is the head of house for Gryffindor?",
     answers: [
        {text: "Severus Snape", correct: false},
        {text: "Minerva McGonagall", correct: true},
        {text: "Pomona Sprout", correct: false},
        {text: "Filius Flitwick", correct: false}
    ]
    },

    {question: "Which of these items is not a Deathly Hallow?",
    answers: [
        {text: "Elder Wand", correct: false},
        {text: "Cloak of Invisibility", correct: false},
        {text: "Maurader's Map", correct: true},
        {text: "Resurrection Stone", correct: false}
    ]
    },
    {question: "What is the name of Voldemort's snake?",
    answers: [
        {text: "Nagini"},
        {text: "Salazar"},
        {text: "Severus"},
        {text: "Marvolo"}
    ]
    },
    {question: "What spell did Harry use to defeat Voldemort in the Deathly Hallows?",
    answers: [
        {text: "Avada Kedavra"},
        {text: "Expelliarmus"},
        {text: "Stupefy"},
        {text: "Expecto Patronum"}
    ]
    },
    {question: "What position does Harry play in Qudditch?",
    answers: [
        {text: "Keeper"},
        {text: "Beater"},
        {text: "Chaser"},
        {text: "Seeker"}
    ]
    }
]


