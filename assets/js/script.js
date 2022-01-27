const question =  document.querySelector("#question");
const choices = Array.from( document.querySelectorAll(".choice-text"));
const progressText =  document.querySelector("#progressText");
const scoreText =  document.querySelector("#score");
const progressBarFull =  document.querySelector("#progressBarFull");

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0 
let availableQuestions = []
 
let questions = [
    {
        question: "Which type of JavaScript language is?",
        choice1: "Object-Based",
        choice2: "Object-Oriented", 
        choice3: "Assembly-language",
        choice4: "High-level",
        answer: 1,
    },
    {
        question:"Which one of the following also known as Conditional Expression?",
        choice1: "immediate if",
        choice2: "if-then-else statement",
        choice3: "Switch statement",
        choice4: "Alternative to if-else",
        answer: 1,
    },
    {
        question:"The 'function' and 'var' are know as?",
        choice1: "Declration statement",
        choice2: "Keywords",
        choice3: "Data types",
        choice4: "Prototypes",
        answer: 1,
    },
    {
        question:"Which one of the following is the correct way for calling the JavaScript code?",
        choice1: "Function/Method",
        choice2: "RMI",
        choice3: "Triggering Event",
        choice4: "Preprocessor",
        answer: 1,
    },
]

const SCORE_POINTS = 100 
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0 
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length ===  0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score) 
        
        return window.location.assign("./end.html")
    }

        questionCounter++ 
        progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
        progressBarFull.style.width=  `${(questionCounter/MAX_QUESTIONS) * 100}%`
        
        const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
        currentQuestion = availableQuestions[questionsIndex]
        question.innerText = currentQuestion.question

        choices.forEach(choice => {
            let number = choice.dataset["number"]
            choice.innerText = currentQuestion["choice" + number]
        })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
    
}

choices.forEach(choice => {
    choice.addEventListener("click" , e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false 
        let selectedChoice = e.target
        let selectedAnswer = selectedChoice.dataset["number"]

        let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : 
        "incorrect"

        if(classToApply === "correct") {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)
        
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()