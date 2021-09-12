import { validateInput, sanitiseInput, convertEnglishToMorse } from "../scripts/translator.js";

// Tests for the function validateInput
describe("Check if the input is a-z, A-Z, 0-9 or space", () => {
    // Test for a valid input
    test("ABCDEFG should return true", () => {
        expect(validateInput("ABCDEFG")).toBe(true);
    });
    // Test for an invalid input
    test("!@£$%^& should return false", () => {
        expect(validateInput("!@£$%^&")).toBe(false);
    });
    // Test for an invalid input
    test("ABCD%^& should return false", () => {
        expect(validateInput("ABCD%^&")).toBe(false);
    });
});

// Tests for the function sanitiseInput
describe("Convert value which is an alphabet character into lower case", () => {
    // Test for a single character
    test("A should return a", () => {
        expect(sanitiseInput("A")).toMatch("a");
    });

    // Test for a single character which is a number
    test("1 should return 1", () => {
        expect(sanitiseInput("1")).toMatch("1");
    });

    // Test for a word
    test("Please should return please", () => {
        expect(sanitiseInput("Please")).toMatch("please");
    });

    // Test for a phrase
    test("Please call NOW should return please call now", () => {
        expect(sanitiseInput("Please call NOW")).toMatch("please call now");
    });
});

// Tests for the function convertEnglishToMorse
describe("Convert sanitised value to morse code", () => {
    // Test for a single character which is a letter
    test("a should return .-", () => {
        expect(convertEnglishToMorse("a").match(".-"));
    });

    // Test for a single character which is a number
    test("1 should return -----", () => {
        expect(convertEnglishToMorse("1").match("-----"));
    });
});
