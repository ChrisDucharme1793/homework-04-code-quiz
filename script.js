//Not sure if i need it but i included the ready function/event

document.addEventListener("DOMContentLoaded", function(event) { 
  //do work
})

//Questions for game

var questions = [
  {
      questionTitle: "After which animal are the Canary Islands named?",
      choice1: "cats",
      choice2: "canaries",
      choice3: "dogs",
      choice4: "beetles",
      correct: "C"
  },
  {
      questionTitle: "The Vatican bank has the only ATM in the world that allows users to do what?",
      choice1: "Scroll style receipt",
      choice2: "Gold and Silver is currency",
      choice3: "perform transactions in latin",
      choice4: "jesus is on the bills",
      correct: "C"
  },
  {
      questionTitle: "What do you call a group of unicorns?",
      choice1: "pokies",
      choice2: "herd of rainbows",
      choice3: "a horny herd",
      choice4: "A blessing",
      correct: "D"
  },
  {
      questionTitle: "What is a camel hair brush made from?",
      choice1: "camel",
      choice2: "sheep",
      choice3: "squirrel",
      choice4: "horse",
      correct: "C"
  },
  {
      questionTitle: "In which month does the German festival of Oktoberfest mostly take place?",
      choice1: "july",
      choice2: "august",
      choice3: "october",
      choice4: "september",
      correct: "D"
  }
]


//Variable Declaration
var start = document.querySelector("#start");
var sec = 75;
var quiz = document.querySelector("#quiz");
var thetime = document.querySelector("#thetime");
var viewHighscores = document.querySelector("#viewhighscores")
var questionTitle = document.querySelector("#title");
var choice1 = document.querySelector("#A");
var choice2 = document.querySelector("#B");
var choice3 = document.querySelector("#C");
var choice4 = document.querySelector("#D");
var correctIncorrect = document.querySelector("#rightorwrong");
var addInitials = document.querySelector("#addinitials");
var highScores = document.querySelector('#highscores');
var clearHighscores = document.querySelector('#clearhighscores-button');
var goBack = document.querySelector('#goback-button');
var topRow = document.querySelector('#toprow');
var highScoresArray;


var lastQuestionIndex = questions.length - 1;
var currentQuestionIndex = 0;
const questionTime = 15;
var count = 75;
var score = 0;
var TIMER;

//shows questions to html
function showQuestion() {
  var currentQ = questions[currentQuestionIndex];
  title.innerHTML = "<h4>" + currentQ.questionTitle + "</h4>";
  choice1.innerHTML = currentQ.choice1;
  choice2.innerHTML = currentQ.choice2;
  choice3.innerHTML = currentQ.choice3;
  choice4.innerHTML = currentQ.choice4;
  console.log(score);
}

//Timer
function myTimer() {
  document.getElementById('timer').innerHTML = sec;
  sec--;
  if (sec == -1) {
      clearInterval(time);
      showScore();
  }
}


//Start Quiz Button
start.addEventListener("click", startQuiz);

function startQuiz() {
  start.style.display = "none";
  myTimer()
  time = setInterval(myTimer, 1000);
  showQuestion();
  quiz.style.display = "block";

}


//Scoring guide
function checkAnswer(answer){
  if( answer === questions[currentQuestionIndex].correct){

      score += 5;
      correctAnswer();
  }else{

      sec -= 15;
       wrongAnswer();
  }
  count = 0;
  if(currentQuestionIndex < lastQuestionIndex){
      currentQuestionIndex++;
      showQuestion();
  }else{

      clearInterval(time);
      showScore();
  }
}

// Final Score Display
function showScore(){
  quiz.style.display = "none";
  start.style.display = "none";
  topRow.style.display = "none";
  scoreContainer.style.display = "block";
  document.getElementById('finalscore').innerHTML = score;
}

//remove after is not working *****NOW IT IS MUTHA FUCKA
function correctAnswer() {
  var removeAfter = 0;
      document.querySelector('#rightorwrong').innerHTML = "Right!";
      removeAfter += 600;
      (function (removeAfter) {
          setTimeout(function () {
              document.querySelector("#rightorwrong").innerHTML = "";
          }, removeAfter);
      })(removeAfter);
  }

///remove after is not working *****NOW IT IS MUTHA FUCKA
function wrongAnswer() {
  var removeAfter = 0;
      document.querySelector('#rightorwrong').innerHTML = "Wrong!";
      removeAfter += 600;
      (function (removeAfter) {
          setTimeout(function () {
              document.querySelector("#rightorwrong").innerHTML = "";
          }, removeAfter);
      })(removeAfter);
  }


  addInitials.addEventListener("click", function(event) {
      event.preventDefault();
    
      var initials = document.querySelector("#initials").value;
      
      if (initials === "") {
        alert("Initials cannot be blank");

      } else {

        localStorage.setItem("initials", initials);
        localStorage.setItem("score", score);
        
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
      topRow.style.display = "none";
      highScores.style.display = "block";

      
      var initials = (localStorage.getItem("initials"));
      var score = (localStorage.getItem("score"));

      console.log(initials);
      console.log(score);

      if (initials === null) {
          console.log('nothing here');

       
          document.querySelector('#highscoreslist').append(" No Highscores Yet! ");
        } else {
             document.querySelector('#highscoreslist').append(initials + "   =    Score: ", + score);
             
        }
    }

  highScoresArray.push("initials", "score");

    clearHighscores.addEventListener("click", function(event) {
      localStorage.clear();
      document.getElementById("highscoreslist").innerHTML = "";

    });

    goBack.addEventListener("click", function(event) {
      event.preventDefault();
      showQuestion()
    
   
    });

    viewHighscores.addEventListener("click", function(event) {
          showHighscores()
               
   
    });