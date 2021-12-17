// https://leetcode.com/problems/count-common-words-with-one-occurrence/

/*
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    let count = 0, obj1 = {}, obj2 = {}
    const makeObj = (arr, obj) => {
        for (i=0; i<arr.length; i++) {
            obj[arr[i]] = obj[arr[i]] + 1 || 1
        }
    }
    makeObj(words1, obj1)
    makeObj(words2, obj2)
    for (prop in obj2) {
        if (obj2[prop] === 1) {
            if (obj1[prop] === 1) {count++}
        }
    }
    return count
};

// Runtime: 112 ms, faster than 34.82% of JavaScript online submissions for Count Common Words With One Occurrence.
// Memory Usage: 44.2 MB, less than 44.73% of JavaScript online submissions for Count Common Words With One Occurrence.