// https://leetcode.com/problems/binary-tree-inorder-traversal/

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
var inorderTraversal = function(root) {
    let output = []   
    const helper = (node) => {
        if (node) {
            if (node.left) {helper(node.left)}
            output.push(node.val)
            if (node.right) {helper(node.right)}            
        } 
    }
    helper(root)
    return output
};

// Runtime: 105 ms, faster than 8.03% of JavaScript online submissions for Binary Tree Inorder Traversal.
// Memory Usage: 38.5 MB, less than 92.37% of JavaScript online submissions for Binary Tree Inorder Traversal.

// CHECK THIS SOLUTION TO LEARN STACK TECHNIQUE: https://leetcode.com/problems/binary-tree-inorder-traversal/discuss/31394/JavaScript-solution-with-iteration