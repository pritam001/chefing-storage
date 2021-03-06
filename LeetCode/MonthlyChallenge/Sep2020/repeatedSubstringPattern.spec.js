const { test } = require("@jest/globals");

const repeatedSubstringPattern = require("./repeatedSubstringPattern");

test("repeatedSubstringPattern 1", () => {
    expect(repeatedSubstringPattern("abab")).toBe(true);
});

test("repeatedSubstringPattern 2", () => {
    expect(repeatedSubstringPattern("aba")).toBe(false);
});

test("repeatedSubstringPattern 3", () => {
    expect(repeatedSubstringPattern("abcabcabcabc")).toBe(true);
});
