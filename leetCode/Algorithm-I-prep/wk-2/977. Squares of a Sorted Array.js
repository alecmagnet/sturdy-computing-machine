// IMPORTANT https://leetcode.com/problems/squares-of-a-sorted-array

var sortedSquares = function(nums) {
    let r = []
    let start = 0
    let end = nums.length - 1
    let pos = end
    while (start <= end) {
        if (nums[start]**2 > nums[end]**2) {
            r[pos--] = nums[start++]**2
        } else {
            r[pos--] = nums[end--]**2
        }
    }
    return r
};