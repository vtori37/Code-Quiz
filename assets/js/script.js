// User Score
var score = 0;
// The given number of the current question
var questionIndex = 0;
//Time left
var timer = 90;
//Time deduction for incorrect answers
var deductions = 10;

var currentTime = document.getElementById("timer");

var startBtn = document.getElementById("startBtn");

var questionContainer = document.getElementById("questionContainer");

var quizQuestion = document.getElementById("quizQuestion");

var answerChoicesEl = document.getElementById("answerChoices");

var scoreboard = document.getElementById("scoreboard");

var userName = document.getElementById("userName");

var submitQuiz = document.getElementById("submitQuiz");




//Question Bank
var questionBank = [
  { num: 0,
    question: "1. Which of the following is the AND operator?",
    answerChoices: [
      "a. ===", 
      "b. ||", 
      "c. &&"],
    answer: "c. &&"  //
  },
  { num: 1,
    question: "2. Which of the following contains a string?",
    answerChoices: [
      "a. let videogame = 'Please play Breat of the Wild.';", 
      "b. const costs = 2;", 
      "c. var animalTypes = [bear, wolf, elephant, giraffe]"],
    answer: "a. let videogame = 'Please play Breat of the Wild.';"
  }, 
  { num: 2,
    question: "3. What does JSON stand for?",
    answerChoices: [
      "a. JavaScript Operator Numerator", 
      "b. JavaScript Object Notation", 
      "c. JavaScript Object Naming"],
    answer:  "b. JavaScript Object Notation", 
  },
  { num: 3,
    question: "4. Which of the following is NOT using proper Javascript syntax for commenting?",
    answerChoices: [
      "a. /* This is a comment. **/", 
      "b. // This is a actually a comment.", 
      "c. <!-- This is also a comment. -->"],
    answer: "c. <!-- This is also a comment. -->"
  },
];

console.log(questionBank);

function startQuiz () {
  var startScreen = document.getElementById("info");
  startScreen.setAttribute("class", "hide");

  questionContainer.removeAttribute("class");

  // start timer
  //add event listener to startbtn

  getQuestions();
}

startBtn.addEventListener("click", startQuiz);




function getQuestions() {
var currentQuestion = questionBank[questionIndex];
console.log(currentQuestion);
 quizQuestion.textContent = currentQuestion.question;
 
 answerChoicesEl.innerHTML = "";
 
 currentQuestion.answerChoices.forEach(choice => {
   var choiceBtn = document.createElement("button");
   choiceBtn.textContent = choice;
   choiceBtn.addEventListener("click", clickedChoice);
   answerChoicesEl.appendChild(choiceBtn);
   
   // clear out answer choices after clicked
  })
  

function clickedChoice() {
  var answer = questionBank[questionIndex].answer;

  if (this.innerText === answer) {
    console.log("correct");
  } else {
    console.log("incorrect");
  }

  questionIndex++;

  if (questionIndex !== questionBank.length) {
    getQuestions();
  } else {
    endQuiz();
  }
  // if statement to see if youre at the end, if not get questions if not then go to function quiz end
}

function endQuiz () {
  console.log("end of quiz ");
}

  // var questions = document.getElementById("questionText").textContent; 
  // var questionText = document.getElementById("quizQuestion");
  
};
  //  document.getElementById("questionText")
    // var answerChoicesText = document.querySelector("choicesText");
     
      // questionText.innerHTML = "";


  //  array.forEach(currentValue, index, arr, thisValue);






// // submit.style.display = "none";

// questionText.innerHTML = "";
// var startBtn = document.getElementById("start");

// function getQuestions(questionNumber) {
//   var questionText = document.getElementById("questionText");
//   // var answerChoicesText = document.querySelector("choicesText");
//     questionText.textContent = questionNumber.questionText; 
//     questionText.innerHTML = "";
// }

// getQuestions(questionBank);


// var btn = document.getElementById("btn");
// btn.addEventListener("click", function() {
//   console.log("clicked heheh");
// });






//     // answerChoicesText.innerHTML=answerChoices;
//     for (var i=0; i< questionBank.length; i++) {
//       var answeredQuestion = questionBank[questionNumber].question;
  
//       var userResponse = questionBank[questionNumber].answerChoices;
//     }
    
//       questionText.textContent = answeredQuestion;

  


// var initialInput = document.querySelector("");
//   var showQuestion = document.getElementsByName("question");
//   //   showQuestion.textContent = index.question;
//   //   console.log("");
//   // }
  
//   // getQuestions(question, 1);
//   // console.log("yikes");
  
  
//   // function questions (){}
  
  
  
  
  
// // //Function for Starting Quiz
// // startBtn.onclick = FUNCTION
// // const info = document.querySelector(".info");
  

    


 





// // // Button to progress to next question
// // var nextBtn = document.getElementById("btn");

// // nextBtn.onlick = FUNCTION



// // //Button to Submit the quiz
// // var submitBtn = document.getElementById("submit");

// // submitBtn.onlick = FUNCTION
