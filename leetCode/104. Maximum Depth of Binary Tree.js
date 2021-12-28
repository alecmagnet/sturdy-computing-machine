// https://leetcode.com/problems/maximum-depth-of-binary-tree/

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
 * @return {number}
 */
var maxDepth = function(root) {
    let counter = 0
    const checkNext = (node, count) => {
        if (root !== null) {
            let countWithin = count + 1
            if (node.left) {checkNext(node.left, countWithin)}
            if (node.right) {checkNext(node.right, countWithin)}
            counter = Math.max(counter, countWithin)           
        }
    }
    checkNext(root, counter)
    return counter
};

// Runtime: 84 ms, faster than 48.17% of JavaScript online submissions for Maximum Depth of Binary Tree.
// Memory Usage: 41.5 MB, less than 89.80% of JavaScript online submissions for Maximum Depth of Binary Tree.