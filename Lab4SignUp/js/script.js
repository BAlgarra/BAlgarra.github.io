
let submit = document.getElementById("submitInput");
let submitResponse = document.getElementById("submitResponse");
submit.addEventListener("click", submitCheck);
function submitCheck() {
    submitResponse.textContent = "";
    let passData = passInput.value;
    let nameData = nameInput.value;
    let passwordInput = document.getElementById("passwordInput");
    let passwordInput2 = document.getElementById("passwordInput2");
    submitResponse.style.color = "red";
    let dataIsValid = true;
    if (nameData.length < 3) {
        dataIsValid = false;
        submitResponse.textContent += "Username must be at least three characters. "
    }

    if (passData.length < 6) {  
        submitResponse.textContent += "Password must be at least six characters. "
        dataIsValid = false;
    } 
    if ( passwordInput.value !== passwordInput2.value) {
        submitResponse.textContent += " Passwords do not match. "
        dataIsValid = false;
    }
    if (dataIsValid) {
        submitResponse.textContent = " Valid password, creating account. "
        submitResponse.style.color = "green";
    }
}


async function setupForm() {

    try {
        let statesResponse = await fetch("https://csumb.space/api/allStatesAPI.php");

        if (!statesResponse.ok) {
            throw new Error("Response failed");
        }

        let statesData = await statesResponse.json();
        console.log(statesData);

        let statesSelect = document.querySelector("#statesSelect");

        for (let stateData of statesData) {
            let stateOption = document.createElement("option");
            stateOption.id = stateData.usps;
            stateOption.value = stateData.usps;
            stateOption.textContent = stateData.state;
            statesSelect.appendChild(stateOption);
        }


    } catch (apiError) {
        console.error(apiError);
    }
}


let zipInput = document.getElementById("zipInput");
zipInput.addEventListener("change", zipSetup);

async function zipSetup() {
    try {
        let zipResponse = await fetch("https://csumb.space/api/cityInfoAPI.php?zip=" + zipInput.value);

        if (!zipResponse.ok) {
            throw new Error("Response failed");
        }

        let zipData = await zipResponse.json();
        console.log(zipData);

        document.getElementById("zipCity").textContent = zipData.city;
        document.getElementById("zipLat").textContent = zipData.latitude;
        document.getElementById("zipLong").textContent = zipData.longitude;


    } catch (apiError) {
        console.error(apiError);
    }
}

let passInput = document.getElementById("passwordInput");
passInput.addEventListener("click", passwordSetup);

async function passwordSetup() {
    try {
        let passwordResponse = await fetch("https://csumb.space/api/suggestedPassword.php?length=8");

        if (!passwordResponse.ok) {
            throw new Error("Response failed");
        }

        let passwordData = await passwordResponse.json();
        console.log(passwordData);

        document.getElementById("suggestedPassword").textContent = "Suggested password: " + passwordData.password;


    } catch (apiError) {
        console.error(apiError);
    }
}

let nameInput = document.getElementById("usernameInput");
nameInput.addEventListener("input", usernameSetup);

async function usernameSetup() {
    let usernameValidText = document.getElementById("usernameValid");
    try {
        let usernameResponse = await fetch("https://csumb.space/api/usernamesAPI.php?username=" + nameInput.value);

        if (!usernameResponse.ok) {
            throw new Error("Response failed");
        }

        let usernameData = await usernameResponse.json();
        console.log(usernameData);

        if (usernameData.available == true) {
            usernameValidText.textContent = "Username is available!";
            usernameValidText.style.color = "green";
        } else {
            usernameValidText.textContent = "Username is not available, please choose another.";
            usernameValidText.style.color = "red";
        }

        // document.getElementById("usernameValid").textContent = "Username available: " + usernameData.available;


    } catch (apiError) {
        console.error(apiError);
    }
}

passInput.addEventListener("input", passwordLength);

async function passwordLength() {
    let passData = passInput.value;
    let passResponse = document.getElementById("passwordLength");
    if (passData.length < 6) {
        passResponse.style.color = "red";
        passResponse.textContent = "Password must be at least six characters"
    } else {
        passResponse.textContent = "";
    }
}

// let statesSelect = document.querySelector("#statesSelect");
statesSelect.addEventListener("change", countySetup);

async function countySetup() {

    try {

        let statesSelect = document.getElementById("statesSelect");
        let selectedValue = statesSelect.value;
        let countyResponse = await fetch("https://csumb.space/api/countyListAPI.php?state=" + selectedValue);

        if (!countyResponse.ok) {
            throw new Error("Response failed");
        }

        let countyData = await countyResponse.json();
        console.log(countyData);

        // let statesSelect = document.querySelector("#statesSelect");

        countySelect.innerHTML = '<option value="">Select a county</option>';

        for (let countyDatas of countyData) {
            let countyOption = document.createElement("option");
            countyOption.id = countyDatas.county;
            countyOption.value = countyDatas.county;
            countyOption.textContent = countyDatas.county;
            countySelect.appendChild(countyOption);
        }


    } catch (apiError) {
        console.error(apiError);
    }
}

setupForm();

