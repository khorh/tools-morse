const getInputLastCharacter = (getInput) => {
    return getInput.charAt(getInput.length-1);
}

/**
 * Function to sanitise the input values especially alphabets
 * @param {*} inputLastCharacter
 * @returns {string} input value as lower case alphabet and no change to numbers 
 */
const sanitiseInput = (inputLastCharacter) => {
    return inputLastCharacter.toLowerCase();
};

const convertEnglishToMorse = (sanitisedInputResults) => {
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
    }
    
    // reformat object to a multi-dimensional array of key value pairs
    const morseCodesCopy = {...morseCodes};
    const morseCodesAsArray = Object.entries(morseCodesCopy);
    
    // filter multi-dimensional array to the input value
    const morseCodesFiltered = morseCodesAsArray.filter(morseCode => morseCode.includes(sanitisedInputResults))
    
    // access the values from the filtered multi-dimensional array
    const morseCode = morseCodesFiltered.values();
    
    for (const value of morseCode) {
        return value[1];
    };
};

export { getInputLastCharacter, sanitiseInput, convertEnglishToMorse };