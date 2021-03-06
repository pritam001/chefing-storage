const { test } = require("@jest/globals");

const rob = require("./houseRobber");

test("rob 1", () => {
    expect(rob([1, 2, 3, 1])).toStrictEqual(4);
});

test("rob 2", () => {
    expect(rob([2, 7, 9, 3, 1])).toStrictEqual(12);
});
