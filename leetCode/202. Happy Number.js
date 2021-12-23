// https://leetcode.com/problems/happy-number/

/*
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let seen = {}
    while (n !== 1 && !seen[n]) {
        seen[n] = true
        n = n.toString().split('').reduce((sum, num) => {return sum + Math.pow(num, 2)}, 0)
        console.log(n)
    }
    return n === 1
};

// Runtime: 132 ms, faster than 12.78% of JavaScript online submissions for Happy Number.
// Memory Usage: 44.6 MB, less than 6.80% of JavaScript online submissions for Happy Number.