// 

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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let result = []
    if (!root) return result
    let firstStr = `${root.val}`
    const helper = (node, str) => {
        if (!node.left && !node.right) result.push(str)
        
        if (node.left) {
            let nodeL = node.left
            let strL = str + "->" + nodeL.val
            helper(nodeL, strL)
        }
        
        if (node.right) {
            let nodeR = node.right
            let strR = str + "->" + nodeR.val
            helper(nodeR, strR)
        }
    }
    helper(root, firstStr)
    return result
};

// Runtime: 80 ms, faster than 59.59% of JavaScript online submissions for Binary Tree Paths.
// Memory Usage: 40.4 MB, less than 33.45% of JavaScript online submissions for Binary Tree Paths.



// LESS MEMORY
var binaryTreePaths = function(root) {
    let list = [];
    let string = ""
    helper(root, list, string)
    return list
};

const helper = (node, list, string) => {
	if (node) {
			string = string + node.val;
			if (!node.left && !node.right) {list.push(string)}
			else {
					string = string + "->"
					helper(node.left, list, string)
					helper(node.right, list, string)
			}
	}
}

// FIGURE THIS OUT TO UNDERSTANT STACK https://leetcode.com/problems/binary-tree-paths/discuss/1516595/JavaScript-100-or-Simple-DFS-Backtracking-Solution