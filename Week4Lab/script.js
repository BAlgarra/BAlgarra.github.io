let submitButton = document.querySelector("#textInputButton");
let response1 = document.querySelector("#textInputResponse");

// generate random order answers
let question3Options = [1, 2, 3];
let shuffledOptions = _.shuffle(question3Options);
let question3Space = document.querySelector("#question3-space");
let checkboxResponse = document.querySelector("#checkboxResponse");
let tries = document.querySelector("#tries");
let currentScore = 0;
let totalTries = 0;
//create option 1
// let radioInput = document.createElement("input");
// radioInput.id = question3Options[i];
// radioInput.value = question3Options[i];
// radioInput.name = "q3-answers";
// radioInput.type="radio";
// question3Space.appendChild(radioInput);
// let radioLabel = document.createElement("label");
// radioLabel.textContent = question3Options[i];
// radioLabel.for = question3Options[i];
// question3Space.appendChild(radioLabel);
function pageSetup() {
    totalTries = parseInt(localStorage.getItem("tries")?? "0", 10);
    tries.textContent = "Total tries: " + totalTries;
}

pageSetup();

submitButton.addEventListener("click", function () {
    let answer1 = document.querySelector("#textInput").value;
    if (answer1.toLowerCase() === "sacramento") {
        response1.textContent = "Correct!";
        currentScore += 20;
    } else {
        response1.textContent = "Nope";
    }

    let answer2 = document.querySelector('input[name="question2"]:checked')?.value;
    if (answer2 === "CSUMB") {
        document.querySelector("#radioResponse").textContent = "Correct!";
        currentScore += 20;
    }
    let answer3 = document.querySelector("#dropdown").value;
    if (answer3 === "Seaside") {
        document.querySelector("#dropdownResponse").textContent = "Correct!";
        currentScore += 20;
    }

    let answer4 = document.querySelector("#numberInput").value;
    console.log(answer3);
    if (answer4 === "2025") {
        document.querySelector("#numberResponse").textContent = "Correct!";
        currentScore += 20;
    } else {
        document.querySelector("#numberResponse").textContent = "Nope";
    }


    let checkedBoxes = document.querySelectorAll('input[name="question5"]:checked');
    let answer5 = Array.from(checkedBoxes).map(cb => cb.value);
    if (answer5.includes("blue")) {
        checkboxResponse.textContent = "Oops, blue is not correct.";
    } else if (answer5.length === 0) {
        checkboxResponse.textContent = "Please select at least one.";
    } else {
        checkboxResponse.textContent = "Correct!";
        currentScore += 20;
    }
    document.querySelector("#totalScore").textContent = "You scored:" + currentScore + "!";
    if (currentScore >= 80) {
        document.querySelector("#congrats").textContent = "You scored higher than 80, Congratulations!";
        document.querySelector("#congrats").style.color = "green";
    }
    totalTries++;
    localStorage.setItem("tries", totalTries);
    tries.textContent = "Total tries: " + totalTries;

});

