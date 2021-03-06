/** *
 All Elements in Two Binary Search Trees

 Given two binary search trees root1 and root2.

 Return a list containing all the integers from both trees sorted in ascending order.

 Example 1:

 Input: root1 = [2,1,4], root2 = [1,0,3]
 Output: [0,1,1,2,3,4]

 Example 2:

 Input: root1 = [0,-10,10], root2 = [5,1,7,0,2]
 Output: [-10,0,0,1,2,5,7,10]

 Example 3:

 Input: root1 = [], root2 = [5,1,7,0,2]
 Output: [0,1,2,5,7]

 Example 4:

 Input: root1 = [0,-10,10], root2 = []
 Output: [-10,0,10]

 Example 5:

 Input: root1 = [1,null,8], root2 = [8,1]
 Output: [1,1,8,8]

 Constraints:

 Each tree has at most 5000 nodes.
 Each node's value is between [-10^5, 10^5].

 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * return {number[]}
 */
const bstToArray = function (root) {
    if (root === undefined || root == null || root.val == null) {
        return [];
    }
    const left = bstToArray(root.left);
    const middle = [root.val];
    const right = bstToArray(root.right);
    return left.concat(middle, right);
};

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
const getAllElements = function (root1, root2) {
    const sorted_array_1 = bstToArray(root1);
    const sorted_array_2 = bstToArray(root2);
    const elements = [];
    let i = 0; let
        j = 0;
    while (i < sorted_array_1.length || j < sorted_array_2.length) {
        if (sorted_array_1[i] < sorted_array_2[j] || j >= sorted_array_2.length) {
            elements.push(sorted_array_1[i]);
            i++;
        } else if (sorted_array_1[i] >= sorted_array_2[j] || i >= sorted_array_1.length) {
            elements.push(sorted_array_2[j]);
            j++;
        }
    }
    return elements;
};

/**
 * @param {number[]} arr
 * @param {TreeNode} tree
 * @param {number} i
 * @param {number} n
 * @return TreeNode
 */
const createBinarySearchTreeFromArray = function (arr, tree, i, n) {
    let root;
    if (i < n) {
        root = new TreeNode(arr[i]);
        root.left = createBinarySearchTreeFromArray(arr, root.left, 2 * i + 1, n);
        root.right = createBinarySearchTreeFromArray(arr, root.right, 2 * i + 2, n);
    }
    return root;
};

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return number[]
 */
const allElementsInTwoBinarySearchTrees = function (arr1, arr2) {
    let bst1 = null;
    bst1 = createBinarySearchTreeFromArray(arr1, bst1, 0, arr1.length);
    if (bst1 === undefined) {
        bst1 = null;
    }
    let bst2 = null;
    bst2 = createBinarySearchTreeFromArray(arr2, bst2, 0, arr2.length);
    if (bst2 === undefined) {
        bst2 = null;
    }
    return getAllElements(bst1, bst2);
};

module.exports = allElementsInTwoBinarySearchTrees;
