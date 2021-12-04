// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted

var twoSum = function(nums, target) {
    let i = 0, j = nums.length -1
    while (i < j) {
        if (nums[i] + nums[j] < target) {i++}
        else if (nums[i] + nums[j] > target) {j--}
        else if (nums[i] + nums[j] == target) {return [i+1, j+1]}
    }
};