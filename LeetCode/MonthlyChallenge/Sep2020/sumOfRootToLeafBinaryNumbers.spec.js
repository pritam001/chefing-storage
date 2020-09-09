const {test} = require("@jest/globals");

const sumRootToLeaf = require("./sumOfRootToLeafBinaryNumbers");

test("sumRootToLeaf 1", () => {
    expect(sumRootToLeaf([1,0,1,0,1,0,1])).toBe(22);
});
