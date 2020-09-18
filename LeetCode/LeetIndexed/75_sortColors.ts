/***
 Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

 Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

 Follow up:

 Could you solve this problem without using the library's sort function?
 Could you come up with a one-pass algorithm using only O(1) constant space?



 Example 1:

 Input: nums = [2,0,2,1,1,0]
 Output: [0,0,1,1,2,2]

 Example 2:

 Input: nums = [2,0,1]
 Output: [0,1,2]

 Example 3:

 Input: nums = [0]
 Output: [0]

 Example 4:

 Input: nums = [1]
 Output: [1]



 Constraints:

 n == nums.length
 1 <= n <= 300
 nums[i] is 0, 1, or 2.

 */

/**
 Do not return anything, modify nums in-place instead.
 */
export function sortColors(nums: number[]): void {
    let nextZero = 0; // tries not be zero
    let fetcher = 0; // fetch and deliver to nextZero or nextTwo
    let nextTwo = nums.length - 1; // tries not to be two
    while(fetcher <= nextTwo) {
        while(nums[nextZero] === 0 && fetcher <= nextTwo) {
            nextZero++;
            if(fetcher < nextZero) {
                fetcher = nextZero;
            }
        }
        while(nums[nextTwo] === 2 && fetcher <= nextTwo) {
            nextTwo--;
        }
        if(fetcher <= nextTwo) {
            if (nums[nextZero] > nums[nextTwo]) {
                let temp = nums[nextZero];
                nums[nextZero] = nums[nextTwo];
                nums[nextTwo] = temp;
            }
            if (nums[nextZero] == nums[nextTwo]) {
                if (nums[fetcher] === 0) {
                    nums[nextZero] = 0;
                    nextZero++;
                    nums[fetcher] = 1;
                    fetcher++;
                } else if (nums[fetcher] === 2) {
                    nums[nextTwo] = 2;
                    nextTwo--;
                    nums[fetcher] = 1;
                    fetcher++;
                } else {
                    fetcher++;
                }
            }
        }
    }
}