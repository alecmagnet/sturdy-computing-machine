// https://leetcode.com/problems/isomorphic-strings/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {return false}
    let hash = {}, tObj = {}
    for (let i in s) {
        if (hash[s[i]]) {
            if (hash[s[i]] !== t[i]) {return false}
        } else if (tObj[t[i]]) {
            return false
        } else {
            hash[s[i]] = t[i]
            tObj[t[i]] = 1
        }
    }
    return true
};

// Runtime: 88 ms, faster than 67.00% of JavaScript online submissions for Isomorphic Strings. MOST RUN-TIMES WERE 84ms (80-some %). FIRST WAS 80ms (90-some %)!!!
// Memory Usage: 44.1 MB, less than 10.75% of JavaScript online submissions for Isomorphic Strings.