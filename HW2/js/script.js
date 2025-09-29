let words = ["otters", "monterey", "programming", "internet", "california", "seaside"];

let wordDisplay = document.getElementById("wordDisplay");
let remainingAttempts = 0;
let correctLetters = 0;
let guessButton = document.getElementById("guessButton");
let attempts = document.getElementById("attempts");
let feedback = document.getElementById("feedback");
let guesses = document.getElementById("allGuesses");
let secretWord = "";
let hiddenArray = [];
let winImage = document.getElementById("winImage");
document.querySelector("#resetButton").addEventListener("click", gameSetup);
guessButton.addEventListener("click", guess);

gameSetup();

function gameSetup() {
    document.body.style.backgroundImage = "url('img/westernTown.jpg')";
    secretWord = words[Math.floor(Math.random() * words.length)];
    hiddenArray = [];
    remainingAttempts = 6;
    document.querySelector("#resetButton").style.display = "none";
    document.querySelector("#guessButton").style.display = "inline";

    for (let i = 0; i < secretWord.length; i++) {
        hiddenArray.push("_ ");
    }
    wordDisplay.textContent = hiddenArray;
    attempts.textContent = "Remaining attempts: " + remainingAttempts;
    guesses.textContent = "Previous guesses: ";
    feedback.textContent = "";
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
        guesses.textContent += letter + " ";

        for (let i = 0; i < secretWord.length; i++) {
            if (secretWord[i] === letter) {
                hiddenArray[i] = letter + " ";
            }
        }
        wordDisplay.textContent = hiddenArray;

        if (!hiddenArray.includes("_ ")) {
            document.body.style.backgroundImage = "url('img/congrats.png')";
            document.body.style.backgroundSize = "cover";
            feedback.textContent = "You win! The word was: " + secretWord;
            feedback.style.color = "limegreen";
            document.querySelector("#resetButton").style.display = "inline";
            guessButton.style.display = "none";
            guessInput.value = "";
            return;
        }
    } else {
        if (remainingAttempts === 0) {
            feedback.textContent = "Game over!";
            feedback.style.color = "red";
            document.querySelector("#resetButton").style.display = "inline";
            document.querySelector("#guessButton").style.display = "none";

            return;
        }
        remainingAttempts--;
        feedback.textContent = "Word does not contain: " + letter;
        feedback.style.color = "white";
        guesses.textContent += letter + " ";
        attempts.textContent = "Remaining attempts: " + remainingAttempts;
    }

}