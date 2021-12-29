// https://leetcode.com/problems/next-greater-element-i/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let ans = [], 
        hashMap = {}
    for (let index in nums2) {
        hashMap[nums2[index]] = index
    }
    for (let i=0; i<nums1.length; i++) {
        let val = nums1[i],
            notThere = true
        for (let j=hashMap[val]; j<nums2.length; j++) {
            if (nums2[j] > val) {
                ans.push(nums2[j])
                notThere = false
                break
            }
        }
        if (notThere) ans.push(-1)
    }
    return ans
};

// Runtime: 121 ms, faster than 9.24% of JavaScript online submissions for Next Greater Element I.
// Memory Usage: 41 MB, less than 28.53% of JavaScript online submissions for Next Greater Element I.