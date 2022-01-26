let question =  document.querySelector("#question");
let choices = Array.from( document.querySelectorAll(".choice-text"));
let progressText =  document.querySelector("#progressText");
let scoreText =  document.querySelector("#score");
let progressBarFull =  document.querySelector("#progressBarFull");

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionsCounter = 0 
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
    {
        question:"If a function which does not return a value is known as?",
        choice1: "Procedures",
        choice2: "Method",
        choice3: "Dynamic function",
        choice4: "All the above",
        answer: 1,
    }
]

let SCORE_POINTS = 100 
let MAX_QUESTIONS = 4

startGamer = () => {
    questionCounter = 0 
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length ===  0 || questionsCounter > MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score)
        
        return window.loctation.assign("/end.html")

        questionCounter++ 
        progressText.innerText = "Question ${questionCounter} of ${MAX_QUESTIONS}"
    }
}