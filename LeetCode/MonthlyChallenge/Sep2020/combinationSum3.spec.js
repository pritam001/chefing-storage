const {test} = require("@jest/globals");

const combinationSum3 = require("./combinationSum3");

test("combinationSum3 1", () => {
    expect(combinationSum3(3,7)).toStrictEqual([[1,2,4]]);
});

test("combinationSum3 2", () => {
    expect(combinationSum3(3,9)).toStrictEqual([[1,2,6], [1,3,5], [2,3,4]]);
});