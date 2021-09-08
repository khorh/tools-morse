import { sanitiseInput, convertEnglishToMorse, getInputLastCharacter } from "./translator.js";

let output = "";

document.querySelector("#input").addEventListener("keyup", () => {
    // From the document, get the input value inputted into the text area
    const getInput = document.querySelector('#input').value;

    // From the input value, get the last character in the string
    const inputLastCharacter = getInputLastCharacter(getInput);

    // Sanitise the input value
    const sanitisedInput = sanitiseInput(inputLastCharacter);

    // Convert English to morse code
    const changeEnglishToMorse = convertEnglishToMorse(sanitisedInput);

    // Add the last character into the global variable
    output += changeEnglishToMorse;

    // Display the morse code
    const displayOutput = document.querySelector("#output").innerText = output;
});

document.querySelector("#clear").addEventListener("click", () => {
    location.reload();
})
