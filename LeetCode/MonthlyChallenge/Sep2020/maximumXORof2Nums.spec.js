const {test} = require("@jest/globals");

const findMaximumXOR = require("./maximumXORof2Nums");

test("findMaximumXOR 1", () => {
    expect(findMaximumXOR([3, 10, 5, 25, 2, 8])).toBe(28);
});

test("findMaximumXOR 2", () => {
    expect(findMaximumXOR([8, 10, 2])).toBe(10);
});