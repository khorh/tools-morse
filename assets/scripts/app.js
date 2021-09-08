import { validateInput, sanitiseInput, convertEnglishToMorse, getInputLastCharacter } from "./translator.js";

let output = "";

document.querySelector("#input").addEventListener("keyup", () => {
    // From the document, get the input value inputted into the text area
    const getInput = document.querySelector('#input').value;

    // From the input value, get the last character in the string
    const inputLastCharacter = getInputLastCharacter(getInput);

    // Validate the input value
    const validatedInput = validateInput(inputLastCharacter);

    // Display error message if it is not a valid character, otherwise carry on with other functions
    if (validatedInput !== inputLastCharacter) {
        document.querySelector("#errorMessage").innerText = validatedInput;
    } else {
        // Sanitise the input value
        const sanitisedInput = sanitiseInput(validatedInput);

        // Convert English to morse code
        const changeEnglishToMorse = convertEnglishToMorse(sanitisedInput);

        // Add the last character into the global variable
        output += changeEnglishToMorse;

        // Display the morse code
        document.querySelector("#output").innerText = output;
    };
});

document.querySelector("#clear").addEventListener("click", () => {
    location.reload();
})
