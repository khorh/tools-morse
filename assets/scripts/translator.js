/**
 * Function to get the last character of the input value
 * @param {*} getInput
 * @returns {string} the last character of the input value
 */
const getInputLastCharacter = (getInput) => {
    return getInput.charAt(getInput.length-1);
};

/**
 * Function to validate the last character of the input value
 * @param {*} inputLastCharacter
 * @returns {string} either the valid character or Invalid character message
 */
const validateInput = (inputLastCharacter) => {
    const morseRegex = /[\w\s]/g;
    if (inputLastCharacter.match(morseRegex)) {
        return inputLastCharacter;
    } else {
        return "Invalid character"
    };
};

/**
 * Function to sanitise the last character of the input value if it is an alphabet
 * @param {*} validatedInput
 * @returns {string} last character of the input value in lower case alphabet unless it is a number 
 */
const sanitiseInput = (validatedInput) => {
    return validatedInput.toLowerCase();
};

/**
 * Function to convert the sanitised character from English to morse code
 * @param {*} sanitisedInput 
 * @returns {string} the morse code based on the sanitised character
 */
const convertEnglishToMorse = (sanitisedInput) => {
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
    
    // reformat object to a multi-dimensional array of key value pairs
    const morseCodesCopy = {...morseCodes};
    const morseCodesAsArray = Object.entries(morseCodesCopy);
    
    // filter multi-dimensional array to the input value
    const morseCodesFiltered = morseCodesAsArray.filter(morseCode => morseCode.includes(sanitisedInput))
    
    // access the values from the filtered multi-dimensional array
    const morseCode = morseCodesFiltered.values();
    
    for (const value of morseCode) {
        return value[1];
    };
};

export { getInputLastCharacter, validateInput, sanitiseInput, convertEnglishToMorse };
