import { validateInput, sanitiseInput, splitInputStringToArr, convertEnglishToMorse } from "../scripts/translator.js";

// Tests for the function validateInput
describe("Check if the input contains a-z, A-Z, 0-9 or space", () => {
    test("A valid input should return true", () => {
        expect(validateInput("ABCDEFG")).toBe(true);
    });

    test("An invalid input i.e. only special characters should return false", () => {
        expect(validateInput("!@£$%^&")).toBe(false);
    });

    test("An invalid input with mixture of valid and invalid characters should return false", () => {
        expect(validateInput("ABCD%^&")).toBe(false);
    });
});

// Tests for the function sanitiseInput
describe("Convert alphabet characters into lower case", () => {
    test("A capitalised alphabet character should return a lower case alphabet", () => {
        expect(sanitiseInput("A")).toMatch("a");
    });

    test("A number should return a number", () => {
        expect(sanitiseInput("1")).toMatch("1");
    });

    test("A word should return a word in lower case", () => {
        expect(sanitiseInput("Please")).toMatch("please");
    });

    test("A phrase should return a phrase in lower case", () => {
        expect(sanitiseInput("Please call NOW")).toMatch("please call now");
    });
});

// Tests for the function splitInputStringToArr
describe("Split sanitised string into array", () => {
    test("input should return true for an array", () => {
        expect(Array.isArray(splitInputStringToArr("urgent"))).toBe(true);
    });

    test("input should return an array", () => {
        expect(splitInputStringToArr("urgent")).toEqual(["u", "r", "g", "e", "n", "t"]);
   });
});

// Tests for the function convertEnglishToMorse
describe("Convert sanitised value to morse code", () => {
    test("An alphabet should return an alphabet in morse code", () => {
        expect(convertEnglishToMorse("a")).toMatch(".-");
    });

    test("A number should return a number in morse code", () => {
        expect(convertEnglishToMorse("1")).toMatch(".----");
    });

    test("A word should return a word in morse code", () => {
        expect(convertEnglishToMorse("please")).toMatch(".--..-....-...");
    });

    test("A phrase should return a phrase in morse code", () => {
        expect(convertEnglishToMorse("please call now")).toMatch(".--..-....-.... -.-..-.-...-.. -.---.--");
    });
});
