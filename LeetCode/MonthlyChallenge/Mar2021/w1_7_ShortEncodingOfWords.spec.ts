import { minimumLengthEncoding } from "./w1_7_ShortEncodingOfWords";

const { test, expect } = require("@jest/globals");

test("minimumLengthEncoding 1", () => {
    expect(minimumLengthEncoding(["time", "me", "bell"])).toStrictEqual(10);
});

test("minimumLengthEncoding 2", () => {
    expect(minimumLengthEncoding(["t"])).toStrictEqual(2);
});
