let words = ["otters", "monterey", "programming", "internet", "california", "seaside"];

let wordDisplay = document.getElementById("wordDisplay");
let remainingAttempts = 0;
let correctLetters = 0;
let guessButton = document.getElementById("guessButton");
guessButton.addEventListener("click", guess);
let attempts = document.getElementById("attempts");
let feedback = document.getElementById("feedback");
let guesses = document.getElementById("allGuesses");
let secretWord = "";
let hiddenArray = [];

gameSetup();
function gameSetup() {
    secretWord = words[Math.floor(Math.random() * words.length)];
    hiddenArray = [];
    remainingAttempts = 6;

    for (let i = 0; i < secretWord.length; i++) {
        hiddenArray.push("_ ");
    }
    wordDisplay.textContent = hiddenArray;
    attempts.textContent = "Remaining attempts: " + remainingAttempts;
    guesses.textContent = "Previous guesses: ";
}

function guess() {
    let guessInput = document.getElementById("playerGuess");
    let letter = guessInput.value.toLowerCase();
    feedback.textContent = "";

     if (letter.length !== 1) {
        feedback.textContent = "Please enter a single letter!";
        feedback.style.color = "rgb(220, 70, 70)";
        guessInput.value = "";
        return;
    }

    if (secretWord.includes(letter)) {
        feedback.textContent = "Good guess!";
        feedback.style.color = "green";

        for (let i = 0; i < secretWord.length; i++) {
            if (secretWord[i] === letter) {
                hiddenArray[i] = letter + " "; 
            }
        }
        wordDisplay.textContent = hiddenArray;
    } else {
        feedback.textContent = "Word does not contain: " + letter;
        feedback.style.color = "white";
        guesses.textContent += letter + " ";
        remainingAttempts--;
        attempts.textContent = "Remaining attempts: " + remainingAttempts;
    }

}