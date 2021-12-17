// https://leetcode.com/problems/word-pattern/

/*
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let arr = s.split(" ")
    if (pattern.length !== arr.length) return false
    let dict = {}, 
        patternObj = {}
    for (let i in arr) {
        if (dict[arr[i]]) {
            if (dict[arr[i]] !== pattern[i]) {return false}
        } else if (patternObj[pattern[i]]) {
            return false
        } else {
            dict[arr[i]] = pattern[i]
            patternObj[pattern[i]] = pattern[i]
        } 
    }
    return true
};

// Runtime: 88 ms, faster than 23.47% of JavaScript online submissions for Word Pattern.
// Memory Usage: 38.1 MB, less than 97.90% of JavaScript online submissions for Word Pattern.