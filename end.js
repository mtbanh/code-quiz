var userName = document.getElementById("name")
var finalScore = document.getElementById("final-score")

var mostRecentScore = localStorage.getItem("mostRecentScore");
finalScore.innerText = mostRecentScore;

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];


function saveHighScore(event){
    event.preventDefault();
    // console.log("test")
    var score = {
        name: userName.value,
        score: mostRecentScore
    };
    highScores.push(score)
    window.location.assign("highscore.html")
    };