import { sanitiseInput, convertEnglishToMorse } from './translator.js';


describe("Convert value which is an alphabet character into lower case", () => {
    test("HELLO should return hello", () => {
        expect(sanitiseInput("HELLO")).toMatch("hello");
    });

    test("Hello FRIEND should return hello friend", () => {
        expect(sanitiseInput("Hello FRIEND")).toMatch("hello friend");
    });

    test("0123456789 should return 0123456789", () => {
        expect(sanitiseInput("0123456789")).toMatch("0123456789");
    });

    test("Abc123 should return abc123", () => {
        expect(sanitiseInput("Abc123")).toMatch("abc123");
    });
});

describe("Convert sanitised value to morse code", () => {
    test("a should return .-", () => {
        expect(convertEnglishToMorse("a").match(".-"));
    });

    test("1 should return -----", () => {
        expect(convertEnglishToMorse("1").match("-----"));
    });

    test("Hello should return ......-...-..---", () => {
        expect(convertEnglishToMorse("Hello").match("......-...-..---"));
    });

    test("H3ll0 should return .......--.-...-..-----", () => {
        expect(convertEnglishToMorse("H3ll0").match(".......--.-...-..----- "));
    });
});
