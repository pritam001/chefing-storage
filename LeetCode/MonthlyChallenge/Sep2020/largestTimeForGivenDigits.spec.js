const {test} = require("@jest/globals");

const largestTimeForGivenDigits = require("./largestTimeForGivenDigits");

test("largestTimeForGivenDigits 1", () => {
    expect(largestTimeForGivenDigits([1,2,3,4])).toBe("23:41");
});

test("largestTimeForGivenDigits 2", () => {
    expect(largestTimeForGivenDigits([5,5,5,5])).toBe("");
});

test("largestTimeForGivenDigits 3", () => {
    expect(largestTimeForGivenDigits([0,0,0,0])).toBe("00:00");
});

test("largestTimeForGivenDigits 4", () => {
    expect(largestTimeForGivenDigits([0,4,0,0])).toBe("04:00");
});

test("largestTimeForGivenDigits 5", () => {
    expect(largestTimeForGivenDigits([9,0,7,7])).toBe("");
});

test("largestTimeForGivenDigits 6", () => {
    expect(largestTimeForGivenDigits([2,0,6,6])).toBe("06:26");
});
