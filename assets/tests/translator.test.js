import { getInputLastCharacter, sanitiseInput, convertEnglishToMorse } from "../scripts/translator.js";

// Tests for the function getInputLastCharacter
describe("Get the last character of the input value", () => {
    // Test for a single character which is a letter
    test("a should return a", () => {
        expect(getInputLastCharacter("a")).toMatch("a");
    });

    // Test for a single character which is a number
    test("1 should return 1", () => {
        expect(getInputLastCharacter("1")).toMatch("1");
    });

    // Test for a word
    test("ball should return l", () => {
        expect(getInputLastCharacter("ball")).toMatch("l");
    })

    // Test for a phrase
    test("cat in the hat should return t", () => {
        expect(getInputLastCharacter("cat in the hat")).toMatch("t");
    })
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
