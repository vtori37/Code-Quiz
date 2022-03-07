// User Score
var score = 0;
// The index of the current question
var questionNumber = 0;
//Time left
var timer = 90;
//Time deduction for incorrect answers
var deductions = 10;

var info



//Question Bank
const questionBank= [
  { num: 1,
    question: "1. Which of the following is the AND operator?",
    answerChoices: [
      "a. ===", 
      "b. ||", 
      "c. &&"],
    answer: 2
  },
  { num: 2,
    question: "2. Which of the following contains a string?",
    answerChoices: [
      "a. let videogame = 'Please play Breat of the Wild.';", 
      "b. const costs = 2;", 
      "c. var animalTypes = [bear, wolf, elephant, giraffe]"],
    answer: 0
  }, 
  { num: 3,
    question: "3. What does JSON stand for?",
    answerChoices: [
      "a. JavaScript Operator Numerator", 
      "b. JavaScript Object Notation", 
      "c. JavaScript Object Naming"],
    answer: 1
  },
  { num: 4,
    question: "4. Which of the following is NOT using proper Javascript syntax for commenting",
    answerChoices: [
      "a. /* This is a comment. **/", 
      "b. // This is a actually a comment.", 
      "c. <!-- This is also a comment. -->"],
    answer: 2
  },
];





submit.style.display = "none";

questionText.innerHTML = "";
var startBtn = document.getElementById("start");

function getQuestions(questionNumber) {
  var questionText = document.querySelector("questionText");
  // var answerChoicesText = document.querySelector("choicesText");
    questionText.textContent = questionNumber.questionText; 
    questionText.innerHTML = "";

}

getQuestions(questionBank);


var btn = document.getElementById("btn");
btn.addEventListener("click", function() {
  console.log("clicked heheh");
});



    // answerChoicesText.innerHTML=answerChoices;
//     for (var i=0; i< questionBank.length; i++) {
//       var answeredQuestion = questionBank[questionNumber].question;
  
//       var userResponse = questionBank[questionNumber].answerChoices;
      
//       // questionText.textContent = answeredQuestion;

//   }
// }


// var initialInput = document.querySelector("");
//   var showQuestion = document.getElementsByName("question");
//   //   showQuestion.textContent = index.question;
//   //   console.log("please work hhaha");
//   // }
  
//   // getQuestions(question, 1);
//   // console.log("yikes");
  
  
//   // function questions (){}
  
  
  
  
  
// // //Function for Starting Quiz
// // startBtn.onclick = FUNCTION
// // const info = document.querySelector(".info");

// //   f
  


      
  

    


 





// // // Button to progress to next question
// // var nextBtn = document.getElementById("btn");

// // nextBtn.onlick = FUNCTION



// // //Button to Submit the quiz
// // var submitBtn = document.getElementById("submit");

// // submitBtn.onlick = FUNCTION

