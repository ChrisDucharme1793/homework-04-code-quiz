var correctIncorrect = document.querySelector("#rightorwrong");
var addInitials = document.querySelector("#addinitials");
var highScores = document.querySelector('#highscores');
var clearHighscores = document.querySelector('#clearhighscores-button');
var goBack = document.querySelector('#goback-button');
var topRow = document.querySelector('#toprow');
var highScoresArray = JSON.parse(localStorage.getItem("highscoreList")) || [];
addInitials.addEventListener("click", function (event) {
  event.preventDefault();

  var initials = document.querySelector("#initials").value;


  if (initials === "") {
    alert("Initials cannot be blank");

  } else {
    let newHighScore = { 'initials': initials, 'score': score };

    highScoresArray.push(newHighScore);
    highScoresArray.sort((a, b) => b.score - a.score);
    highScoresArray.splice(5);
    localStorage.setItem('highscoreList', JSON.stringify(highScoresArray));



    showHighscores();
  }
  console.log(initials);
  console.log(score);

});

//Highscore Page
function showHighscores() {
  quiz.style.display = "none";
  scoreContainer.style.display = "none";
  thetime.style.display = "none";
  viewHighscores.style.display = "none";
  start.style.display = "none";
  document.querySelector('#toprow').style.display = "none";
  highScores.style.display = "block";

  highScoresArray = JSON.parse(localStorage.getItem("highscoreList")) || [];
  console.log(highScoresArray);
  highScoresArray.forEach(function(highScore) {
   
    $('#highscoreslist').append(highScore.initials + "   =    Score: ", + highScore.score +"<br>");
  })
}

clearHighscores.addEventListener("click", function (event) {
  localStorage.clear();
  document.getElementById("highscoreslist").innerHTML = "";

});

goBack.addEventListener("click", function (event) {
  event.preventDefault();ß
  showQuestion()


});

viewHighscores.addEventListener("click", function (event) {
  showHighscores()


})
