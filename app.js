import { sanitiseInput, convertEnglishToMorse, getInputLastCharacter } from './translator.js';

let input = "";

document.querySelector('#input').addEventListener('keyup', () => {
    // From the document, get the input value inputted into the text area
    const getInput = document.querySelector('#input').value;
    // console.log(getInput);

    // From the input value, get the last character in the string
    const inputLastCharacter = getInputLastCharacter(getInput);
    // console.log(inputLastCharacter);

    // Sanitise the input value
    const sanitisedInput = sanitiseInput(inputLastCharacter);

    // Convert English to morse code
    const changeEnglishToMorse = convertEnglishToMorse(sanitisedInput);

    // Add the last character into the global variable
    input += changeEnglishToMorse;

    // Display the morse code
    document.querySelector('#output').innerText = input;
});
