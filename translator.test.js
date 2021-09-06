import sanitiseInputValue from "./translator.js";

describe("Convert alphabet character into lower case", () => {
    test("HELLO should return hello", () => {
        expect(sanitiseInputValue("HELLO")).toBe("hello");
    });

    test("Hello Enemy should return hello enemy", () => {
        expect(sanitiseInputValue("Hello Enemy")).toBe("hello enemy");
    });

    test("0123456789 should return 0123456789", () => {
        expect(sanitiseInputValue("0123456789")).toBe("0123456789");
    });
})

