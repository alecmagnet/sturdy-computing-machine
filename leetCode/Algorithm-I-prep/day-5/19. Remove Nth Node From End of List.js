// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let fast = head
    let fastCount = 0
    let slow = head
    let slowCount = 0-n-1
    while (fast) {
        fast = fast.next
        fastCount ++
        if (slowCount >= 0) {
            slow = slow.next
        }
        slowCount ++
    }
    if (slowCount === -1) {head = head.next}
    else if (slowCount === fastCount - 1) {slow.next = null}
    else {slow.next = slow.next.next}
    return head
};

// Runtime: 80 ms, faster than 64.93% of JavaScript online submissions for Remove Nth Node From End of List.
// Memory Usage: 40.5 MB, less than 15.64% of JavaScript online submissions for Remove Nth Node From End of List.
