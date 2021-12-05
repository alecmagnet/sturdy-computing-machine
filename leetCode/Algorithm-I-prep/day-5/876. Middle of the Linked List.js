// https://leetcode.com/problems/middle-of-the-linked-list/

/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow = head
    let fast = head.next
    let slowCount = 0
    let fastCount = 0
    while (fast) {
        fastCount ++
        fast = fast.next
        if (slowCount < fastCount/2) {
            slowCount ++
            slow = slow.next
        }
    }
    return slow
};