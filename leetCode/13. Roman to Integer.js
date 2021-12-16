// https://leetcode.com/problems/roman-to-integer/

/*
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const symbols = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let i = 0
    let result = 0
    while (i<s.length) {
        let first = symbols[s[i]]
        let second = symbols[s[i+1]]
        if (i === s.length - 1 || first >= second) {
            result += first
            i++
        } else {
            result += (second - first)
            i +=2
        }
    }
    return result
};

// Runtime: 140 ms, faster than 84.35% of JavaScript online submissions for Roman to Integer.
// Memory Usage: 44.7 MB, less than 67.63% of JavaScript online submissions for Roman to Integer.