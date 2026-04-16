let randomNumber = Math.floor(Math.random() * 10) + 1;
let guess = 5; // change this number to test

if (guess === randomNumber) {
  console.log("🎉 Correct! You guessed the number.");
} else if (guess > randomNumber) {
  console.log("Too high!");
} else {
  console.log("Too low!");
}

console.log("The number was:", randomNumber);