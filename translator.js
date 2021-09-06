/**
 * Function to sanitise the input values especially alphabets
 * @param {*} inputValue
 * @returns {string} input value as lower case alphabet and no change to numbers 
 */
const sanitiseInputValue = (inputValue) => {
    return inputValue.toLowerCase();
};

export default sanitiseInputValue;