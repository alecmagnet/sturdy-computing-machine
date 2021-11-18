// https://leetcode.com/problems/truncate-sentence/submissions/

var truncateSentence = function(s, k) {
    return s.split(" ").slice(0, k).join(" ")
};

// https://leetcode.com/problems/shuffle-the-array/submissions/

var shuffle = function(nums, n) {
    let retArr = []
    for (i=0; i<n; i++) {
        retArr.push(nums[i])
        retArr.push(nums[n+i])
    }
    return retArr
};