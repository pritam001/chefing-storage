import swapNodesConstruct from "./w2_8_SwappingNodesLinkedList";

const { test, expect } = require("@jest/globals");

test("swapNodesConstruct 1", () => {
    expect(swapNodesConstruct([1,2,3,4,5], 2)).toStrictEqual([1,4,3,2,5]);
});

test("swapNodesConstruct 2", () => {
    expect(swapNodesConstruct([7,9,6,6,7,8,3,0,9,5], 5)).toStrictEqual([7,9,6,6,8,7,3,0,9,5]);
});

test("swapNodesConstruct 3", () => {
    expect(swapNodesConstruct([1], 1)).toStrictEqual([1]);
});

test("swapNodesConstruct 4", () => {
    expect(swapNodesConstruct([1,2], 1)).toStrictEqual([2,1]);
});

test("swapNodesConstruct 5", () => {
    expect(swapNodesConstruct([1,2,3], 2)).toStrictEqual([1,2,3]);
});
