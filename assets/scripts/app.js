import { validateInput, sanitiseInput, splitInputStringToArr, convertEnglishToMorse } from "./translator.js";

document.querySelector("#submit").addEventListener("click", () => {
    // From the document, get the input values inputted into the text area
    const getInput = document.querySelector("#input").value;

    // Validate the input value
    const validatedInput = validateInput(getInput);

    if (validatedInput === false) {
        // Display error message if it does not fit in the regex's criteria
        document.querySelector("#output").innerText = "Your input contains invalid characters, please correct and re-submit.";
    } else {
        // Sanitise the input value
        const sanitisedInput = sanitiseInput(getInput);

        // Split the input value from string to array
        const inputArr = splitInputStringToArr(sanitisedInput)

        // Convert English to morse code
        const changeEnglishToMorse = convertEnglishToMorse(inputArr);

        // Display the morse code
        document.querySelector("#output").innerText = changeEnglishToMorse;
    }
});

document.querySelector("#clear").addEventListener("click", () => {
    location.reload();
})
