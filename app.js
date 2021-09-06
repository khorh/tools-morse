import lowerCaseInputValue from "./translator.js";

document.querySelector('#input').addEventListener('keyup', () => {
    // Everytime there is a keyup, get the value from the text area
    const inputValue = document.querySelector('#input').value;

    // Function to change each value that is alphabet to lower case
    lowerCaseInputValue(inputValue);
});
