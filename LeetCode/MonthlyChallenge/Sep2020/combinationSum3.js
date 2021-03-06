/** *
 Combination Sum III

 Find all possible combinations of k numbers that add up to a number n,
 given that only numbers from 1 to 9 can be used
 and each combination should be a unique set of numbers.

 Note:

 All numbers will be positive integers.
 The solution set must not contain duplicate combinations.

 Example 1:

 Input: k = 3, n = 7
 Output: [[1,2,4]]

 Example 2:

 Input: k = 3, n = 9
 Output: [[1,2,6], [1,3,5], [2,3,4]]

 */

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = function (k, n) {
    const output = combinationFromArray(k, n, []);
    return output;
};

/**
 * @param {number} k
 * @param {number} n
 * @param {number[]} ignoredNums
 * @return {number[][]}
 */
const combinationFromArray = function (k, n, ignoredNums) {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const validNums = nums.filter((n) => !ignoredNums.includes(n));
    const combinations = [];
    if (k > 0 && n > 0 && validNums.length >= k) {
        if (k === 1 && validNums.includes(n)) {
            return [[n]];
        } if (k === 1 && !validNums.includes(n)) {
            return [];
        }
        const selectedNum = validNums[0];
        const updatedIgnoredNums = [...ignoredNums, selectedNum].sort();
        // include selectedNum
        const incSubCombinations = combinationFromArray(k - 1, n - selectedNum, updatedIgnoredNums);
        incSubCombinations.forEach((comb) => {
            combinations.push([selectedNum, ...comb].sort());
        });
        // exclude selectedNum
        const excSubCombinations = combinationFromArray(k, n, updatedIgnoredNums);
        excSubCombinations.forEach((comb) => {
            combinations.push(comb);
        });
    }
    return combinations;
};

module.exports = combinationSum3;
