//guess a number between 1 and 100

var correctNum = Math.floor((Math.random()* 100) + 1);
var userGuess = Number(prompt("Guess a number between 1 and 100"));
var youWon = false;
//loop a certain number of guesses
for(var i = 0; i <= 7; i++) {
 if (userGuess > correctNum) { //evaluates guess
  console.log(userGuess + " is too high");
  userGuess = Number(prompt("Guess Again...")); //resets guess
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
