// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/

var maxDepth = function(s) {
    let r = 0
    let a = s.split('')
    for (i=0; i<a.length; i++) {
        let b = a.slice(0, i)
        let q = b.filter(e => e === '(').length - b.filter(e => e === ')').length
        if (q > r) r = q
    }
    return r
};