const {test} = require("@jest/globals");

const uniquePaths = require("./62_uniquePaths");

test("uniquePaths 1", () => {
    expect(uniquePaths(3, 7)).toBe(28);
});

test("uniquePaths 2", () => {
    expect(uniquePaths(3, 2)).toBe(3);
});

test("uniquePaths 3", () => {
    expect(uniquePaths(7, 3)).toBe(28);
});

test("uniquePaths 4", () => {
    expect(uniquePaths(3, 3)).toBe(6);
});

test("uniquePaths 4", () => {
    expect(uniquePaths(1, 3)).toBe(1);
});

test("uniquePaths 4", () => {
    expect(uniquePaths(3, 1)).toBe(1);
});