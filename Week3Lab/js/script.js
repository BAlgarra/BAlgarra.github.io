let correctNumber = 25;
let guessAttempts = 0;

let totalWins = 0;
let totalLosses = 0;
// let correctNumber = Math.floor(Math.random() * 99) + 1;

let guessInput = document.querySelector("#guessInput");
let guessButton = document.querySelector("#guessButton");

// guessInput.style.backgroundColor = "green";

// function turnGreen() {
//     guessInput.style.backgroundColor = "lightgreen";
// }

guessButton.addEventListener("click", function () {
    if (validateInput()) {
        guessAttempts++;
        if (guessInput.value == correctNumber) {

            document.querySelector("#guessResponse").style.color = "green";
            document.querySelector("#guessResponse").textContent =
                "You guessed correct!!"
            if (guessAttempts <= 7) {
                document.querySelector("#specialMessage").textContent =
                    "Wow!! You're great!!!"
            }
            totalWins++;
        } else {
            document.querySelector("#guessResponse").style.color = "red";
            document.querySelector("#guessResponse").textContent =
                "You guessed wrong!"
            document.querySelector("#specialMessage").textContent =
                ""
            if (guessInput.value < correctNumber) {
                document.querySelector("#guessResponse").textContent +=
                    "\nTry higher!"
            } else {
                document.querySelector("#guessResponse").textContent +=
                    "\nTry lower!"
            }
            totalLosses++;
        }
    }

    //    document.querySelector("#guessList").textContent = "You guessed: " 
    document.querySelector("#guessList").textContent += guessInput.value + " ";
});

function validateInput() {
    if (guessInput.value < 0 || guessInput.value > 99) {
        alert("Number has to be between 0 and 99!")
        return false;
    }
    return true;
}
