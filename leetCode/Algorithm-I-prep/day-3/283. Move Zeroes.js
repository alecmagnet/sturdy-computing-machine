// https://leetcode.com/problems/move-zeroes

var moveZeroes = function(nums) {
    let k = 0
    for (i=0; i<nums.length; i++) {
        if (nums[i] != 0) {
            [nums[k++], nums[i]] = [nums[i], nums[k]]
        }
    }
};

var moveZeroes = function(nums) {
    for (i=0; i<nums.length; i++) {
        if (nums[i] === 0) {
            nums.push(nums.splice(i,1))
            i--
        }
    }
};