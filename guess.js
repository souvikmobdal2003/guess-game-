// Generate a random number between 0 and 19 (inclusive)
let number = Math.floor(Math.random() * 10);

// Set the number of attempts the user has to 10
let attempts = 5;

// Add an event listener to the button with the id "btn"
// When the button is clicked, call the checkGuess function
document.getElementById("btn").addEventListener("click", checkGuess);

// Define the checkGuess function
function checkGuess() {
  // Get the user's input from the input field and convert it to an integer
  let userInput = parseInt(document.getElementsByClassName("input")[0].value);

  // Decrement the number of attempts by 1
  attempts--;

  // Check if the user's input is less than the generated number
  if (userInput < number) {
    // Display a message indicating that the input is too low
    document.getElementsByClassName("result")[0].innerHTML = "It is too low";
  } 
  // Check if the user's input is greater than the generated number
  else if (userInput > number) {
    // Display a message indicating that the input is too high
    document.getElementsByClassName("result")[0].innerHTML = "It is too high";
  } 
  // Check if the user's input is equal to the generated number
  else if (userInput === number) {
    // Display a congratulatory message indicating that the user won
    document.getElementsByClassName("result")[0].innerHTML = "Congratulations! You win the game";
  }

  // Check if the user has run out of attempts
  if (attempts === 0) {
    // Display a message indicating that the user lost
    document.getElementsByClassName("result")[0].innerHTML = "You lose the game. Better luck next time";
  }
}