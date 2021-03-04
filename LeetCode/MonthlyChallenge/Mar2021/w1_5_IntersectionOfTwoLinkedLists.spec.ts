const {test, expect} = require("@jest/globals");

import {getIntersectionNode} from "./w1_5_IntersectionOfTwoLinkedLists";

test("getIntersectionNode 1", () => {
    expect(getIntersectionNode([3,0,1])).toStrictEqual(2);
});

test("getIntersectionNode 2", () => {
    expect(getIntersectionNode([0,1])).toStrictEqual(2);
});

test("getIntersectionNode 3", () => {
    expect(getIntersectionNode([9,6,4,2,3,5,7,0,1])).toStrictEqual(8);
});

test("getIntersectionNode 4", () => {
    expect(getIntersectionNode([0])).toStrictEqual(1);
});
