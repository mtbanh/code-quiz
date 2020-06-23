var highscoreList = document.getElementById("highscore-list");
var highscores = JSON.parse(localStorage.getItem("highscores")) || [];


 highscores.map(function(highscore){
     console.log("$(score.name) - $(score.mostRecentScore)")
 })
