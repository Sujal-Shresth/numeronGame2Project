// Iteration 8: Making scoreboard functional
const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);
var score = urlParams.get("score");

const scoreBoard = document.getElementById("score-board");
const newGame = document.getElementById("play-again-button");

scoreBoard.innerHTML = score;
newGame.addEventListener('click', () => {
  location.href = "./game.html";
})