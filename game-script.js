var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("choice-text"));
var progress = document.getElementById("progress")
var timerDisplay = document.getElementById("time-display")


var currentQuestion = {};
var availableQuestion = [];
var score = 0;
var questionCounter = 0;

var pointPerQuestion = 1;
var totalQuestions = 5;

var timeRemaining = 30;
var questionArray = [
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
        question: "Which event occurs when the user clicks on an HTML element? ",
        choice1: "onmouseclick",
        choice2: "onclick",
        choice3: "click",
        choice4: "onchange",
        answer: 2
    }

];


function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestion = [...questionArray]
    console.log(availableQuestion);

    getNewQ();
    startTimer();
}

function startTimer() {
   
    var timer = setInterval(function() {
        timerDisplay.innerHTML = timeRemaining;
      timeRemaining --
      if (seconds < 0){
          clearInterval(timer)
          return window.location.assign("end.html")
      }
    }, 1000);
  }
  

function getNewQ() {
    if (availableQuestion.length === 0) {
        localStorage.setItem("mostRecentScore", score)
        return window.location.assign("end.html");
    }

    questionCounter++;
    var questionIndex = Math.floor(Math.random() * availableQuestion.length);
    currentQuestion = availableQuestion[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(function (choice) {
        var number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestion.splice(questionIndex, 1);

};

choices.forEach(function (choice) {
    choice.addEventListener("click", function (event) {
     
        console.log(event.target);

       
        var selectedChoice = event.target;
        var selectedAnswer = selectedChoice.dataset["number"];

        if (selectedAnswer == currentQuestion.answer) {
            correctAnswer = "Correct!";
            score ++
            console.log(score)
        }
        else {
            correctAnswer = "Incorrect!";
            timeRemaining -=5
                }
        progress.textContent = correctAnswer


        getNewQ();
    });
});


startGame();


