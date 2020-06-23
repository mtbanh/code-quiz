var userName = document.getElementById("name")
var saveScoreBtn = document.getElementById("saveScore")
var finalScore = document.getElementById("final-score")
var mostRecentScore = localStorage.getItem("mostRecentScore");

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores)

finalScore.innerText = mostRecentScore;

function saveHighScore(event){
    event.preventDefault();
    // console.log("test")
    var score = {
        name: userName.value,
        score: mostRecentScore
    };
    highScores.push(score)
    console.log(highScores)
    
    // window.location.assign("highscore.html")
    };