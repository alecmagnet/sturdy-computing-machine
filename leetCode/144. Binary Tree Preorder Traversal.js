// https://leetcode.com/problems/binary-tree-preorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */


// RECURSIVE SOLUTION

var preorderTraversal = function(root) {
    let result = []
    if (!root) return result
    const helper = (node) => {
        result.push(node.val)
        if (node.left) helper(node.left)
        if (node.right) helper(node.right)
    }
    
    helper(root)
    return result
};

// Runtime: 111 ms, faster than 8.47% of JavaScript online submissions for Binary Tree Preorder Traversal.
// Memory Usage: 38.8 MB, less than 83.07% of JavaScript online submissions for Binary Tree Preorder Traversal.


// ITERATIVE SOLUTION WITH STACK

var preorderTraversal = function(root) {
    let result = []
    if (!root) return result
    let stack = [root]
    
    while (stack.length > 0) {
        let node = stack.pop()
        result.push(node.val)
        if (node.right) stack.push(node.right)
        if (node.left) stack.push(node.left)
    }
    
    return result
};

// Runtime: 116 ms, faster than 6.63% of JavaScript online submissions for Binary Tree Preorder Traversal.
// Memory Usage: 39.7 MB, less than 11.70% of JavaScript online submissions for Binary Tree Preorder Traversal.
