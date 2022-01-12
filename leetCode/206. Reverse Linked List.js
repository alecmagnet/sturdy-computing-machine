// https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) return head
    
    let arr = [head.val], node, temp;
    
    while (head.next) {
        head = head.next
        arr.push(head.val)    
    }
        
    for (let i=0; i<arr.length; i++) {
        if (!node) {node = new ListNode(arr[i])}
        else {
            temp = new ListNode(arr[i])
            temp.next = node
            node = temp            
        }
    }
   
    return node
};

// Runtime: 133 ms, faster than 8.49% of JavaScript online submissions for Reverse Linked List.
// Memory Usage: 40.9 MB, less than 31.53% of JavaScript online submissions for Reverse Linked List.

// CHECK OUT THIS SOLUTION
// https://leetcode.com/problems/reverse-linked-list/discuss/1449712/Easy-C%2B%2BJavaPythonJavaScript-Explained%2BAnimated

// https://www.youtube.com/watch?v=D7y_hoT_YZI

// https://pretagteam.com/question/converting-array-to-linked-list-from-eloquent-javascript