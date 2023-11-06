// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");

var num1,num2;
var score = 0;
generateRandomNum(); 

function generateRandomNum(){
    num1 = parseInt(Math.random() * 100);
    number1.innerHTML = num1;
    num2 = parseInt(Math.random() * 100);
    number2.innerHTML = num2;
}

// Iteration 3: Creating variables required to make the game functional
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const divide = document.getElementById("divide");
const mul = document.getElementById("mul");
const modulus = document.getElementById("modulus");

var operation;

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
const number3 = document.getElementById("number3");
var num3;
randomise();

// Iteration 5: Creating a randomise function to make the game functional
function randomise(){
    operation = parseInt(Math.random() * 6);
    console.log(operation)
    switch (operation) {
        case 1:
            num3 = num1 + num2;
          break;
    
        case 2:
            num3 = num1 - num2;
          break;
    
        case 3:
            num3 = num1 * num2;
          break;
    
        case 4:
            num3 = (num1 / num2).toPrecision(3);
          break;
    
        case 5:
            num3 = num1 % num2;
          break;
        case 0:
            randomise();
      }
      console.log(num3)
      number3.innerHTML = num3;
}

// Iteration 6: Making the Operators (button) functional

function gameOver(){
    location.href = "gameover.html?score=" + score;
}
document.addEventListener('click', (e) => {
    if(e.target.classList.contains('Operator')){
        let operator = e.target.getAttribute('id');
        if(operator === "plus"){
            if (num1 + num2 === num3) {
                score++;
                generateRandomNum()
                randomise();
                resetTime(timer);
              } else {
                gameOver();
              }
        }

        else if(operator === "minus"){
            if (num1 - num2 === num3) {
                score++;
                generateRandomNum()
                randomise();
                resetTime(timer);
              } else {
                gameOver();
              }
        }

        else if(operator === "mul"){
            if (num1 * num2 === num3) {
                score++;
                generateRandomNum()
                randomise();
                resetTime(timer);
              } else {
                gameOver();
              }
        }

        else if(operator === "divide"){
            if ((num1 / num2).toPrecision(3) === num3) {
                score++;
                generateRandomNum()
                randomise();
                resetTime(timer);
              } else {
                gameOver();
              }
        }

        else if(operator === "modulus"){
            if (num1 % num2 === num3) {
                score++;
                generateRandomNum()
                randomise();
                resetTime(timer);
              } else {
                gameOver();
              }
        }
    }
})


// Iteration 7: Making Timer functional
var time, timer;
const timerDiv = document.getElementById("timer");
startTimer();

function startTimer(){
    time = 20;
    timerDiv.innerHTML = time;
    timer = setInterval(() => {
        time--;
        if (time == 0) gameOver();
        timerDiv.innerHTML = time;
      }, 1000);
}

function resetTime(timer) {
    clearInterval(timer);
    startTimer();
}