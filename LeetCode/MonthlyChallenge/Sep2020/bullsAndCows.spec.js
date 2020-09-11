const {test} = require("@jest/globals");

const getHint = require("./bullsAndCows");

test("getHint 1", () => {
    expect(getHint("1807", "7810")).toBe("1A3B");
});

test("getHint 2", () => {
    expect(getHint("1123", "0111")).toBe("1A1B");
});