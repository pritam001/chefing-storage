const {test, expect} = require("@jest/globals");

import {sortColors} from "./75_sortColors";

test("sortColors 1", () => {
    let colorArray: number[] = [2,0,2,1,1,0];
    sortColors(colorArray);
    expect(colorArray).toStrictEqual([0,0,1,1,2,2]);
});

test("sortColors 2", () => {
    let colorArray: number[] = [2,0,1];
    sortColors(colorArray);
    expect(colorArray).toStrictEqual([0,1,2]);
});

test("sortColors 3", () => {
    let colorArray: number[] = [1];
    sortColors(colorArray);
    expect(colorArray).toStrictEqual([1]);
});

test("sortColors 4", () => {
    let colorArray: number[] = [0];
    sortColors(colorArray);
    expect(colorArray).toStrictEqual([0]);
});

test("sortColors 5", () => {
    let colorArray: number[] = [1,2,1];
    sortColors(colorArray);
    expect(colorArray).toStrictEqual([1,1,2]);
});

test("sortColors 6", () => {
    let colorArray: number[] = [1,2,2,2,2,0,0,0,1,1];
    sortColors(colorArray);
    expect(colorArray).toStrictEqual([0,0,0,1,1,1,2,2,2,2]);
});