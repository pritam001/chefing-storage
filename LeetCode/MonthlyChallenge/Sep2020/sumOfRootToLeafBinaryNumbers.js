/***
 Sum of Root To Leaf Binary Numbers

 Given a binary tree, each node has value 0 or 1.  Each root-to-leaf path represents a binary number starting with the most significant bit.  For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.

 For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.

 Return the sum of these numbers.



 Example 1:

 Input: [1,0,1,0,1,0,1]
 Output: 22
 Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22



 Note:

 The number of nodes in the tree is between 1 and 1000.
 node.val is 0 or 1.
 The answer will not exceed 2^31 - 1.


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
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {number[]} arr
 * @param {TreeNode} tree
 * @param {number} i
 * @param {number} n
 * @return TreeNode
 */
const createBinarySearchTreeFromArray = function(arr, tree, i, n) {
    let root = null;
    if(i < n) {
        root = new TreeNode(arr[i]);
        root.left = createBinarySearchTreeFromArray(arr, root.left, 2 * i + 1, n);
        root.right = createBinarySearchTreeFromArray(arr, root.right, 2 * i + 2, n);
    }
    return root;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    let sumArray  = sumRootToLeafStep(root, 0);
    return sumArray.reduce((a, v) => a + v);
};

const sumRootToLeafStep = function(root, upValue) {
    if(root == null) {
        return [];
    }
    let currentValue = upValue * 2 + root.val;
    let currentArray = (root.left == null && root.right == null) ? [currentValue] : [];
    let leftArray = root.left != null ? sumRootToLeafStep(root.left, currentValue) : [];
    let rightArray = root.right != null ? sumRootToLeafStep(root.right, currentValue) : [];
    return currentArray.concat(leftArray).concat(rightArray);
}

/**
 * @param {number[]} arr
 * @return {number}
 */
const sumRootToLeafFromArray = function(arr) {
    let bst1 = null;
    bst1 = createBinarySearchTreeFromArray(arr , bst1, 0, arr.length);
    if(bst1 === undefined) {
        bst1 = null;
    }
    return sumRootToLeaf(bst1);
}

module.exports = sumRootToLeafFromArray;