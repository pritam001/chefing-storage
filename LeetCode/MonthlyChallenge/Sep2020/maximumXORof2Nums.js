/** *
 Maximum XOR of Two Numbers in an Array

 Given a non-empty array of numbers, a0, a1, a2, … , an-1, where 0 ≤ ai < 2^31.

 Find the maximum result of ai XOR aj, where 0 ≤ i, j < n.

 Could you do this in O(n) runtime?

 Example:

 Input: [3, 10, 5, 25, 2, 8]

 Output: 28

 Explanation: The maximum result is 5 ^ 25 = 28.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaximumXOR = function (nums) {
    let maxXOR = 0; let
        mask = 0;
    const set = new Set();

    for (let i = 31; i >= 0; i--) {
        mask |= Math.pow(2, i);
        const possibleMax = maxXOR | Math.pow(2, i);

        for (let j = 0; j < nums.length; j++) {
            set.add(nums[j] & mask);
        }

        for (let j = 0; j < nums.length; j++) {
            const reqNum = (nums[j] & mask) ^ possibleMax;
            if (set.has(reqNum)) {
                maxXOR = possibleMax;
            }
        }

        set.clear();
    }
    return maxXOR;
};

module.exports = findMaximumXOR;
