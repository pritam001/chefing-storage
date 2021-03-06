const { test } = require("@jest/globals");

const compareVersion = require("./compareVersionNumbers");

test("compareVersion 1", () => {
    expect(compareVersion("0.1", "1.1")).toBe(-1);
});

test("compareVersion 2", () => {
    expect(compareVersion("1.0.1", "1")).toBe(1);
});

test("compareVersion 3", () => {
    expect(compareVersion("7.5.2.4", "7.5.3")).toBe(-1);
});

test("compareVersion 4", () => {
    expect(compareVersion("1.01", "1.001")).toBe(0);
});

test("compareVersion 5", () => {
    expect(compareVersion("1.0", "1.0.0")).toBe(0);
});
