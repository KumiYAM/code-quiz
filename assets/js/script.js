//WHEN I click the start button
//creat a start button in my HTML
//give it a unique id
//declare a variable to hold my button in JS var start
//var start would equal document.get element by id
//and an event listner to that button
var start = document.getElementById("startBtn")
start.addEventListener("click", function () {
    console.log("start")
    startTimer();
})
//THEN a timer starts
// an element for the timer in HTML
//give it a unique id

var timeLeft = 65
function startTimer() {
    var quizTimer = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(quizTimer);
        }
        timeLeft--
        console.log(timeLeft)
    }, 1000);
}

//access that array using the index we are currently on
//access the object question and choices
var questions = [
    // question: "",
    {
        question: 'HTML is',
        answer1: "aaaaa",
        answer2: "qqqqq",
        answer3: "ooooo"
    },
    {
        question: 'DOM means',
        answer1: "eeeeee",
        answer2: "pppppp",
        answer3: "tttttt"
    }
]
// We start the game with a score of 0.
var score = 0;

/*
// Loop over every question object
for (var i = 0; i < questions.length; i++) {
    // Display current question to user and ask OK/Cancel
    var answer = confirm(questions[i].q);
  
    // Compare answers
    if (
      (answer === true && questions[i].a === 't') ||
      (answer === false && questions[i].a === 'f')
    ) {
      // Increase score
      score++;
      // Alert the user
      alert('Correct!');
    } else {
      alert('Wrong!');
    }
  }
*/
//and set the coresponding HTML elements inner text to the objects values

//When I answer a question 
//grab the choice buttons using unique id
//add event listner for each
//conditional compare user choice to current question answer
//WHEN I answer a question incorrectly


//THEN time is subtracted form the clock
//subtrac time from global variable if incorect

//THEN I am presented with another question
//increase current / index by 1

//access that array using the index we are currently on
//access the object question and choices



//and set the coresponding HTML elements inner text to the objects values

//WHEN the game is over
//Then I can save my initial and score

////////User story///////
//WHEN I click the start button 
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN timeis substracted from the clock
//WHEN all questions are answerd or the timer reaches 0
//THEN the game is over
//WHEN the game is over 
//THEN I can save my initials and score
////////////////////////