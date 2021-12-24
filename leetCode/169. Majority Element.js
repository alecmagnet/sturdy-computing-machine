// https://leetcode.com/problems/majority-element/

// FASTER:

/*
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let freq = {}
    let halfLen = nums.length/2
    for (let i=0; i<nums.length; i++) {
        let elem = nums[i]
        freq[elem] = freq[elem] + 1 || 1
        if (freq[elem] > halfLen) return elem
    }
};

// Runtime: 76 ms, faster than 85.29% of JavaScript online submissions for Majority Element.
// Memory Usage: 41.5 MB, less than 78.88% of JavaScript online submissions for Majority Element.




// FIRST ATTEMPT
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