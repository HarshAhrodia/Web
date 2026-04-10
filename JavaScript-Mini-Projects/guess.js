const secretNumber = Math.floor(Math.random() * 10) + 1;
const guess = 7; // change this value to test

if (guess === secretNumber) {
  console.log("🎉 Correct guess!");
} else if (guess > secretNumber) {
  console.log("📈 Too high!");
} else {
  console.log("📉 Too low!");
}

console.log("Secret number was:", secretNumber);