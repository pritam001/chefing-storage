/***
 A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

 The robot can only move either down or right at any point in time. The robot is trying to reach
 the bottom-right corner of the grid (marked 'Finish' in the diagram below).

 How many possible unique paths are there?



 Example 1:

 Input: m = 3, n = 7
 Output: 28

 Example 2:

 Input: m = 3, n = 2
 Output: 3
 Explanation:
 From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
 1. Right -> Down -> Down
 2. Down -> Down -> Right
 3. Down -> Right -> Down

 Example 3:

 Input: m = 7, n = 3
 Output: 28

 Example 4:

 Input: m = 3, n = 3
 Output: 6



 Constraints:

 1 <= m, n <= 100
 It's guaranteed that the answer will be less than or equal to 2 * 10^9.

 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function(m, n) {
    let dpArray = new Array(Math.min(m, n));
    dpArray.fill(1);
    for(let i = 2; i <= Math.max(m, n); i++) {
        for(let j = 1; j < dpArray.length; j++) {
            dpArray[j] = dpArray[j - 1] + dpArray[j];
        }
    }
    return dpArray[dpArray.length - 1];
};

module.exports = uniquePaths;