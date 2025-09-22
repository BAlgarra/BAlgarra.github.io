//Global variables
let randomNumber;
let attempts = 0;
let totalWins = 0;
let totalLosses = 0;

//Event Listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

initializeGame();

function initializeGame() {
    randomNumber = Math.floor(Math.random() * 99) + 1;
    console.log("randomNumber: " + randomNumber);
    attempts = 0;

    //hiding the Reset button
    document.querySelector("#resetBtn").style.display = "none";

    //showing the Guess button
    document.querySelector("#guessBtn").style.display = "inline";

    let playerGuess = document.querySelector("#playerGuess");
    playerGuess.focus(); //adding focus to textbox
    playerGuess.value = ""; //clearing textbox

    let feedback = document.querySelector("#feedback");
    feedback.textContent = ""; // clearing the feedback

    //clearing previous guesses
    document.querySelector("#guesses").textContent = "";

    //initialize wins and losses display
    document.querySelector("#wins").textContent = "Total wins: " + totalWins;
    document.querySelector("#losses").textContent = "Total losses: " + totalLosses;
    document.querySelector("#attempts").textContent = "Remaining Attempts: " + (7 - attempts);
    // initializeGame()
    document.querySelector("#guesses").textContent = "Previous Guesses: ";

}

function checkGuess() {
    let feedback = document.querySelector("#feedback");
    let guesses = document.querySelector("#guesses");
    let guess = document.querySelector("#playerGuess").value;
    feedback.style.color = "black";
    console.log("Player guess: " + guess);
    if (guess < 1 || guess > 99) {
        feedback.textContent = "Enter a number between 1 and 99";
        feedback.style.color = "red";
        return;
    }
    attempts++;
    feedback.textContent = "";
    document.querySelector("#attempts").textContent = "Remaining Attempts: " + (7 - attempts);
  



    if (guess < randomNumber) {
        feedback.textContent = "Guess was low";
        guesses.textContent += (guess + " ");

    }
    if (guess > randomNumber) {
        feedback.textContent = "Guess was high";
        guesses.textContent += (guess + " ");
    }
    if (guess == randomNumber) {
        feedback.textContent = "Congratulations, you won!"
        feedback.style.color = "green"
        totalWins++;
        document.querySelector("#guessBtn").style.display = "none";
        document.querySelector("#resetBtn").style.display = "";

    }

  if (attempts >= 7 && guess != randomNumber) {
        feedback.textContent = "Sorry, try again!    Number was: " + randomNumber;
        feedback.style.color = "red";
        totalLosses++;
        document.querySelector("#guessBtn").style.display = "none";
        document.querySelector("#resetBtn").style.display = "inline";

    }



}