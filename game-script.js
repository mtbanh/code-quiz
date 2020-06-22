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
        question: "Javascript can be described as a program that can: ",
        choice1: "define the content of the page",
        choice2: "specify the styling and layout of the page",
        choice3: "program the behaviour of the page",
        choice4: "all of the above",
        answer: 3
    },
    {
        question: "Inside which html element is Javascript inserted? ",
        choice1: "<script>",
        choice2: "<body>",
        choice3: "<src>",
        choice4: "<None of the above",
        answer: 1
    },
    {
        question: "How do you call a function?",
        choice1: "call function() ",
        choice2: "function() ",
        choice3: "var function() ",
        choice4: "function ",
        answer: 2
    },
    {
        question: "How do you add a comment in JS? ",
        choice1: "//This is a comment",
        choice2: "<!--This is a comment-->",
        choice3: "'This is a comment' ",
        choice4: "None of the above",
        answer: 1
    },
    {
        question: "How do you write 'Hello World' in an alert box? ",
        choice1: "alert("Hello World")",
        choice2: "msgBox("Hello World")",
        choice3: "None of the above",
        choice4: "alertBox("Hello World")",
        answer: 1
    }

];

function startGame() {
    questionCounter=0;
    score=0;
    availableQuestion = [...questionArray]
    console.log(availableQuestion);
    
    getNewQ();
}

// startGame()

function getNewQ(){
    questionCounter++;
    for (var i=0; i<Math.floor(Math.random() * availableQuestion.length); i++){;
    currentQuestion = availableQuestion[i];
    question.innerText = currentQuestion.question
    }

}

startGame()
