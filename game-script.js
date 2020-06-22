var question = document.getElementById("question");
var choices = document.getElementsByClassName("choice-text");
// console.log(choices)

var currentQuestion = {};
var availableQuestion = [];
var score = 0;
var questionCounter = 0;
var answer = true;

var pointPerQuestion = 1;
var totalQuestions = 5;

var questionArray= [
    {
        question: "q1",
        choice1: "a",
        choice2: "b",
        choice3: "c",
        choice4: "d",
        answer: 1
    },
    {
        question: "q2",
        choice1: "a",
        choice2: "b",
        choice3: "c",
        choice4: "d",
        answer: 1
    },
    {
        question: "q3",
        choice1: "a",
        choice2: "b",
        choice3: "c",
        choice4: "d",
        answer: 1
    },
    {
        question: "q4",
        choice1: "a",
        choice2: "b",
        choice3: "c",
        choice4: "d",
        answer: 1
    },
    {
        question: "q5",
        choice1: "a",
        choice2: "b",
        choice3: "c",
        choice4: "d",
        answer: 1
    }

];

function startGame() {
    questionCounter=0;
    score=0;
    availableQuestion = [...questionArray]
    
    getNewQ();
}

function getNewQ(){
    questionCounter++
    for (var i=0; i<Math.floor(Math.random() * availableQuestion.length); i++){;
    currentQuestion = availableQuestion[i];
    question.innerText = currentQuestion.question
    }

}
