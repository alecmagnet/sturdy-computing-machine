// https://leetcode.com/problems/valid-anagram/

/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sLen = s.length, sDict = {}, tDict = {}
    if (sLen !== t.length) {return false}
    for (i=0; i<sLen; i++) {
        sDict[s[i]] = sDict[s[i]] + 1 || 1
        tDict[t[i]] = tDict[t[i]] + 1 || 1
    }
    for (const char in sDict) {
        if (sDict[char] !== tDict[char]) return false
    }
    return true
};

// Runtime: 88 ms, faster than 79.68% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 40.5 MB, less than 83.40% of JavaScript online submissions for Valid Anagram.