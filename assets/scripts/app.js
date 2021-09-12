import { validateInput, sanitiseInput, splitInputStringToArr, convertEnglishToMorse } from "./translator.js";

document.querySelector("#submit").addEventListener("click", () => {
    // const key = event.key;
    // const morseRegex = /[\w ]/;
    //
    // if (!key.match(morseRegex)) {
    //     // Display error message if it does not fit in the regex's criteria
    //     document.querySelector("#errorMessage").innerText = "Invalid input for morse code, please delete.";
    //
    // } else if (key === "Backspace" || key === "Delete") {
    //     // Remove the last morse code from global output variable ["", "", "", etc]
    //     output.pop();
    //     console.log(output);
    //
    //     // Display the removed morse code
    //     document.querySelector("#output").innerText = output.join("");
    //
    //     // Remove the error message
    //     document.querySelector("#errorMessage").innerText = "";
    //
    // } else if (key.match(morseRegex)) {
    //
    // }

    // // From the input value, get the last character in the string
    // const inputLastCharacter = getInputLastCharacter(getInput);
    // console.log(inputLastCharacter);

    // From the document, get the input values inputted into the text area
    const getInput = document.querySelector("#input").value;
    console.log(getInput);

    // Validate the input value
    const validatedInput = validateInput(getInput);

    if (validatedInput === false) {
        // Display error message if it does not fit in the regex's criteria
        document.querySelector("#output").innerText = "Your input contains invalid characters, please correct and re-submit.";
    } else {
        // Sanitise the input value
        const sanitisedInput = sanitiseInput(getInput);
        console.log(sanitisedInput);

        // Split the input value from string to array
        const inputArr = splitInputStringToArr(sanitisedInput)
        console.log(inputArr);

        // Convert English to morse code
        const changeEnglishToMorse = convertEnglishToMorse(inputArr);
        console.log(changeEnglishToMorse)

        // Display the morse code
        document.querySelector("#output").innerText = changeEnglishToMorse;
    }
});

document.querySelector("#clear").addEventListener("click", () => {
    location.reload();
})
