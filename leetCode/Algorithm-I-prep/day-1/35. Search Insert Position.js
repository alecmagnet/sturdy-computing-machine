/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1
    let mid = null
    while (left <= right) {
        mid = parseInt(left + (right - left)/2) 
        if (nums[mid] == target) { return mid }
        else if (nums[mid] < target) { left = mid + 1 }
        else { right = mid -1 }
    }
    return target < nums[mid] ? mid : mid + 1
};