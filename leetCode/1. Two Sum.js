// https://leetcode.com/problems/two-sum/

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = {}
    for (i=0; i<nums.length; i++) {
        let cur = nums[i]
        let complement = target-cur
        if (hash[complement] !== undefined) {
            return [hash[complement], i]
        }
        hash[cur] = i
    }
};

// Runtime: 74 ms, faster than 89.76% of JavaScript online submissions for Two Sum.
// Memory Usage: 40.4 MB, less than 48.20% of JavaScript online submissions for Two Sum.