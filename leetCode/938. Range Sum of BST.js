// https://leetcode.com/problems/range-sum-of-bst/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let result = 0
    const helper = (node) => {
        if (node.val >= low && node.val <= high) {
            result += node.val
        }
        if (node.left) helper(node.left)
        if (node.right) helper(node.right)
    }
    helper(root)
    return result
};

// Runtime: 216 ms, faster than 62.84% of JavaScript online submissions for Range Sum of BST.
// Memory Usage: 69.3 MB, less than 53.91% of JavaScript online submissions for Range Sum of BST.