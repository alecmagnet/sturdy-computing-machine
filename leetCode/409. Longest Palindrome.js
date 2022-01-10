// https://leetcode.com/problems/longest-palindrome/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let result = 0,
        freq = {},
        len = s.length,
        addOn = 0
    for (let i=0; i<len; i++) {
        freq[s[i]] = freq[s[i]] + 1 || 1
    }
    for (const key in freq) {
        if (freq[key] % 2 === 0) {
            result += freq[key]
        } else {
            addOn = 1
            result += (Math.floor(freq[key]/2))*2
        }
    }
    return result + addOn
};

// Your runtime beats 57.84 % of javascript submissions.
// Your memory usage beats 23.22 % of javascript submissions.
