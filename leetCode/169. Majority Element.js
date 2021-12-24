// https://leetcode.com/problems/majority-element/

/*
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let freq = {}
    for (let i=0; i<nums.length; i++) {
        freq[nums[i]] = freq[nums[i]] + 1 || 1
        if (freq[nums[i]] > nums.length/2) return nums[i]
    }
};

// Runtime: 84 ms, faster than 53.71% of JavaScript online submissions for Majority Element.
// Memory Usage: 42.6 MB, less than 40.75% of JavaScript online submissions for Majority Element.