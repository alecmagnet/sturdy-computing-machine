// https://leetcode.com/problems/missing-number/

/*
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let hash = {}
    for (i=0; i<=nums.length; i++) {
        hash[i] = 1
    }
    for (let i in nums) {
        delete hash[nums[i]]
    }
    for (prop in hash) {
        return prop
    }
};

// Runtime: 76 ms, faster than 89.39% of JavaScript online submissions for Missing Number.
// Memory Usage: 44.9 MB, less than 9.47% of JavaScript online submissions for Missing Number.



// FROM ryadav96's comment at https://leetcode.com/problems/missing-number/discuss/480793/Javascript-Simple-solution-faster-than-99.08-submissions

var missingNumber = function(nums) {
    return -nums.reduce((acc,num,i)=> acc+num-i-1,0);
};

// TC: O(n)
// SC: O(1)
