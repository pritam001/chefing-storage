const {test} = require("@jest/globals");

const allElementsInTwoBinarySearchTrees = require("./allElementsInTwoBinarySearchTrees");

test("allElementsInTwoBinarySearchTrees 1", () => {
    expect(allElementsInTwoBinarySearchTrees([2,1,4], [1,0,3])).toStrictEqual([0,1,1,2,3,4]);
});

test("allElementsInTwoBinarySearchTrees 2", () => {
    expect(allElementsInTwoBinarySearchTrees([0,-10,10], [5,1,7,0,2])).toStrictEqual([-10,0,0,1,2,5,7,10]);
});

test("allElementsInTwoBinarySearchTrees 3", () => {
    expect(allElementsInTwoBinarySearchTrees([], [5,1,7,0,2])).toStrictEqual([0,1,2,5,7]);
});

test("allElementsInTwoBinarySearchTrees 4", () => {
    expect(allElementsInTwoBinarySearchTrees([0,-10,10], [])).toStrictEqual([-10,0,10]);
});

test("allElementsInTwoBinarySearchTrees 5", () => {
    expect(allElementsInTwoBinarySearchTrees([1,null,8], [8,1])).toStrictEqual([1,1,8,8]);
});
