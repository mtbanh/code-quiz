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
   
    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    highscores.push(score)


    localStorage.setItem("score", JSON.stringify(highscores));

    return window.location.assign("highscore.html")
};

saveHighScore();

//display score in highscore list

function displayScore(){
    
}