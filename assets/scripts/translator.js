/**
 * Function to check if any of the input characters is a-z, A-Z, 0-9 and space
 * @param getInput
 * @return {boolean} true is when ALL input characters meets the criteria and false is the opposite
 */
const validateInput = (getInput) => {
    let resultFromInputWithRegex = [];

    const morseCodeRegex = /[a-zA-Z0-9 ]/;

    for (let inputItem of getInput) {
        const testInputWithRegex = morseCodeRegex.test(inputItem);
        resultFromInputWithRegex.push(testInputWithRegex);
    }

    return resultFromInputWithRegex.includes(false) ? false : true;
};

/**
 * Function to sanitise the input values if it is an alphabet (not applicable for numbers)
 * @param {string} getInput
 * @returns {string} input value is in lower case alphabets
 */
const sanitiseInput = (getInput) => {
    return getInput.toLowerCase();
};

/**
 * Function to split the sanitised input value into an array
 * @param {string} sanitisedInput
 * @return {array} an array containing individual alphabets, numbers or spaces
 */
const splitInputStringToArr = (sanitisedInput) => {
    return sanitisedInput.split("");
};

/**
 * Function to convert the input array from English to morse code
 * @param {*} inputArr
 * @returns {string} the morse code translation for all characters
 */
const convertEnglishToMorse = (inputArr) => {
    let output = "";

    // object containing morse codes
    const morseCodes = {
        'a': '.-',
        'b': '-...',
        'c': '-.-.',
        'd': '-..',
        'e': '.',
        'f': '..-.',
        'g': '--.',
        'h': '....',
        'i': '..',
        'j': '.---',
        'k': '-.-',
        'l': '.-..',
        'm': '--',
        'n': '-.',
        'o': '---',
        'p': '.--.',
        'q': '--.-',
        'r': '.-.',
        's': '...',
        't': '-',
        'u': '..-',
        'v': '...-',
        'w': '.--',
        'x': '-..-',
        'y': '-.--',
        'z': '--..',
        '1': '.----',
        '2': '..---',
        '3': '...--',
        '4': '....-',
        '5': '.....',
        '6': '-....',
        '7': '--...',
        '8': '---..',
        '9': '----.',
        '0': '-----',
        ' ': ' '
    }

    // for loop the input array and return the morse code for each character
    for (const inputItem of inputArr) {
        const inputItemToMorseCode = morseCodes[inputItem];
        output += inputItemToMorseCode;
    }

    return output;
};

export { validateInput, sanitiseInput, splitInputStringToArr, convertEnglishToMorse };
