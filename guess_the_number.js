//guess a number between 1 and 100

var correctNum = Math.floor((Math.random()* 100) + 1);

var userGuess = Number(prompt("Guess a number between 1 and 100"));
var youWon = false;
for(var i = 0; i < 7; i++) {
 if (userGuess > correctNum) {
  console.log(userGuess + " is too high");
  userGuess = Number(prompt("Guess Again..."));
} else if (userGuess < correctNum) {
  console.log(userGuess + " is too low");
  userGuess = Number(prompt("Try Again"));
} else if (userGuess === correctNum) {
  console.log("YOU WIN!");
  youWon = true;
}
}

if (!youWon) {
  console.log("You Lost!")
}
