//Not sure if i need it but i included the ready function/event

document.addEventListener("DOMContentLoaded", function(event) { 
  //do work
})

//Questions for game

var questions = [
  {
      questionTitle: "What is the general name given to organizations that put together floats for parades and/or balls",
      choice1: "Drunks",
      choice2: "Cajuns",
      choice3: "Krewes",
      choice4: "Creoles",
      correct: "C"
  },
  {
      questionTitle: "What traditional item is found inside of a festive King Cake",
      choice1: "A King",
      choice2: "Fifth of Bourbon",
      choice3: "A Baby",
      choice4: "Your lack of dignity",
      correct: "C"
  },
  {
      questionTitle: "In Ireland, England, Australia, New Zealand, and Canada, people celebrate Mardi Gras by a different name, what do they call it?",
      choice1: "Boxing Day",
      choice2: "Window Licker Day",
      choice3: "Rage Day",
      choice4: "Pancake Day",
      correct: "D"
  },
  {
      questionTitle: "What do the colors of Mardi Gras stand for? Green is for _________, gold means_________and purple symbolizes ___________.",
      choice1: "Bourbon, Whiskey, and Moonshine",
      choice2: "New Orleans, Baton Rouge and Lafayette",
      choice3: "Faith, Power and Justice",
      choice4: "TOO DRUNK TO REMEMBER",
      correct: "C"
  },
  {
      questionTitle: "It is illegal to ride a float without one of these in New Orleans",
      choice1: "Beer/Alchols",
      choice2: "Feather bow",
      choice3: "An Accent",
      choice4: "A Mask",
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
startBtn.addEventListener("click", startQuiz);

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


 
