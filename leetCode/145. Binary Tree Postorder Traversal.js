// https://leetcode.com/problems/binary-tree-postorder-traversal/

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
var postorderTraversal = function(root) {
    let result = []
    if (!root) return result
    let stack = [root]
    while (stack.length > 0) {
        node = stack.pop()
        result.push(node.val)
        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)
    }
    return result.reverse()
};

// Runtime: 138 ms, faster than 5.08% of JavaScript online submissions for Binary Tree Postorder Traversal.
// Memory Usage: 38.5 MB, less than 89.97% of JavaScript online submissions for Binary Tree Postorder Traversal.