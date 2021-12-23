// https://leetcode.com/problems/first-unique-character-in-a-string/

/*
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let freq = {}
    for (let i=0; i<s.length; i++) {
        freq[s[i]] = freq[s[i]]+1 || 1
    }
    for (let j=0; j<s.length; j++) {
        if (freq[s[j]] === 1) {return j}
    }
    return -1
};

// Runtime: 104 ms, faster than 80.03% of JavaScript online submissions for First Unique Character in a String.
// Memory Usage: 42.1 MB, less than 69.73% of JavaScript online submissions for First Unique Character in a String.