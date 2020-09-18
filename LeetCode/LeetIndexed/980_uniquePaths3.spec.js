const {test} = require("@jest/globals");

const uniquePathsIII = require("./980_uniquePaths3");

test("uniquePathsIII 1", () => {
    expect(uniquePathsIII([[1,0,0,0],[0,0,0,0],[0,0,2,-1]])).toStrictEqual(2);
});

test("uniquePathsIII 2", () => {
    expect(uniquePathsIII([[1,0,0,0],[0,0,0,0],[0,0,0,2]])).toStrictEqual(4);
});

test("uniquePathsIII 3", () => {
    expect(uniquePathsIII([[0,1],[2,0]])).toStrictEqual(0);
});

test("uniquePathsIII 4", () => {
    expect(uniquePathsIII([[1,0,2],[0,0,0],[0,0,0]])).toStrictEqual(2);
});

test("uniquePathsIII 4", () => {
    expect(uniquePathsIII([])).toStrictEqual(0);
});