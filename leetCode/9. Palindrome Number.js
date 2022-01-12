// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x<0) return false
    if (x<10) return true
    let str = `${x}`, i=0, j=str.length-1
    while (i<j) {
        if (str[i++] !== str[j--]) return false
    }
    return true
};

// Runtime: 449 ms, faster than 6.28% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 48.7 MB, less than 21.95% of JavaScript online submissions for Palindrome Number.