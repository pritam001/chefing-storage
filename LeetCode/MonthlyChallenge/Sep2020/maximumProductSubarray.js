/***
 Maximum Product Subarray

 Given an integer array nums, find the contiguous subarray within an array
 (containing at least one number) which has the largest product.

 Example 1:

 Input: [2,3,-2,4]
 Output: 6
 Explanation: [2,3] has the largest product 6.

 Example 2:

 Input: [-2,0,-1]
 Output: 0
 Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    for(let i = 0; i <nums.length; i++) {
        if(nums[i] === 0) {
            return Math.max(
                maxProductInNonZeroArray(nums.slice(0, i)),
                0,
                maxProduct(nums.slice(i + 1, nums.length))
            );
        }
    }
    return maxProductInNonZeroArray(nums);
};

/**
 * @param {number[]} arr
 * @return {number}
 */
const maxProductInNonZeroArray = (arr) => {
    if(arr.length === 0) {
        return -Infinity;
    } if(arr.length === 1) {
        return arr[0];
    } else {
        let product = 1;
        let firstNegIndex = -1;
        let lastNegIndex = -1;
        for(let i = 0; i < arr.length; i++) {
            product *= arr[i];
            if(arr[i] < 0) {
                if(firstNegIndex < 0) {
                    firstNegIndex = i;
                }
                lastNegIndex = i;
            }
        }
        if(product > 0) {
            return product;
        } else {
            let possibleMaxes = [];
            if(firstNegIndex !== arr.length - 1) {
                let leftMulti = arr.slice(0, firstNegIndex + 1).reduce((acc, val) => {
                    return acc * val;
                }, 1);
                possibleMaxes.push(product/leftMulti);
            }
            if(lastNegIndex !== 0) {
                let rightMulti = arr.slice(lastNegIndex, arr.length).reduce((acc, val) => {
                    return acc * val;
                }, 1);
                possibleMaxes.push(product/rightMulti);
            }
            return Math.max(...possibleMaxes);
        }
    }
}

module.exports = maxProduct;