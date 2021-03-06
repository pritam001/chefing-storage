const { test } = require("@jest/globals");

const insert = require("./insertInterval");

test("insertInterval 1", () => {
    expect(insert([[1, 3], [6, 9]], [2, 5])).toStrictEqual([[1, 5], [6, 9]]);
});

test("insertInterval 2", () => {
    expect(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])).toStrictEqual([[1, 2], [3, 10], [12, 16]]);
});

test("insertInterval 3", () => {
    expect(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [6, 7])).toStrictEqual([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]]);
});

test("insertInterval 4", () => {
    expect(insert([], [5, 7])).toStrictEqual([[5, 7]]);
});
