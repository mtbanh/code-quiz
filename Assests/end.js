var userName = document.getElementById("name")
var saveScoreBtn = document.getElementById("saveScore")
var finalScore = document.getElementById("final-score")
var mostRecentScore = localStorage.getItem("mostRecentScore");

finalScore.innerText = mostRecentScore;

// console.log(highScores)

// var highScores =localStorage.setItem("highScores", JSON.stringify(highScores))


function saveHighScore(event){
    event.preventDefault();
    // console.log("test")
    var score = {
        name: userName.value,
        score: mostRecentScore
    };
    localStorage.setItem("score", JSON.stringify(score));
    var highScores = JSON.parse(localStorage.getItem("score"));
    highScores.push(score)

};