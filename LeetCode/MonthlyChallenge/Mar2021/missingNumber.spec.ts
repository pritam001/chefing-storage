const {test, expect} = require("@jest/globals");

import {missingNumber} from "./missingNumber";

test("missingNumber 1", () => {
    expect(missingNumber([3,0,1])).toStrictEqual(2);
});

test("missingNumber 2", () => {
    expect(missingNumber([0,1])).toStrictEqual(2);
});

test("missingNumber 3", () => {
    expect(missingNumber([9,6,4,2,3,5,7,0,1])).toStrictEqual(8);
});

test("missingNumber 4", () => {
    expect(missingNumber([0])).toStrictEqual(1);
});
