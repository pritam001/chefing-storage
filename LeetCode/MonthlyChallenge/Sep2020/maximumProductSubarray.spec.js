const {test} = require("@jest/globals");

const maxProduct = require("./maximumProductSubarray");

test("maxProduct 1", () => {
    expect(maxProduct([2,3,-2,4])).toBe(6);
});

test("maxProduct 2", () => {
    expect(maxProduct([-2,0,-1])).toBe(0);
});

test("maxProduct 3", () => {
    expect(maxProduct([-2])).toBe(-2);
});

test("maxProduct 4", () => {
    expect(maxProduct([2,-2,3,-1])).toBe(12);
});

test("maxProduct 5", () => {
    expect(maxProduct([0,-2,3,-1])).toBe(6);
});

test("maxProduct 6", () => {
    expect(maxProduct([2,-2,3,0])).toBe(3);
});

test("maxProduct 7", () => {
    expect(maxProduct([2,3,-4,0])).toBe(6);
});

test("maxProduct 8", () => {
    expect(maxProduct([-2,3,4,0])).toBe(12);
});

test("maxProduct 9", () => {
    expect(maxProduct([0,-2,3,4])).toBe(12);
});