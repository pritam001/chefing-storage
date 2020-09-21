const {test, expect} = require("@jest/globals");

import {carPooling} from "./carPooling";

test("carPooling 1", () => {
    expect(carPooling([[2,1,5],[3,3,7]], 4)).toStrictEqual(false);
});

test("carPooling 2", () => {
    expect(carPooling([[2,1,5],[3,3,7]], 5)).toStrictEqual(true);
});

test("carPooling 3", () => {
    expect(carPooling([[2,1,5],[3,5,7]], 3)).toStrictEqual(true);
});

test("carPooling 4", () => {
    expect(carPooling([[3,2,7],[3,7,9],[8,3,9]], 11)).toStrictEqual(true);
});
