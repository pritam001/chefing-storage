const {test, expect} = require("@jest/globals");
import {LargestTimeForGivenDigits} from './typed_largestTimeForGivenDigits.ts';
const sum = LargestTimeForGivenDigits.sum;

test('basic', () => {
    expect(sum()).toBe(0);
});

test('basic again', () => {
    expect(sum(1, 2)).toBe(3);
});
