// https://leetcode.com/problems/rings-and-rods/

// ATTEMPT TWO WITH NO SLICED SUBSTRING

/*
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let rods = {}, result = 0
    for (i=0; i<rings.length; i+=2) {
        let j = i+1
        if (!rods[rings[j]]) {rods[rings[j]] = {}}
        let r = rods[rings[j]], q = rings[i]
        r[q] ? r[q] += 1 : r[q] = 1
    }
    for (const [key, value] of Object.entries(rods)) {
        if (Object.keys(value).length === 3) {result += 1}
    }
    return result
};

// Runtime: 68 ms, faster than 93.44% of JavaScript online submissions for Rings and Rods.
// Memory Usage: 38.9 MB, less than 55.74% of JavaScript online submissions for Rings and Rods.



// ATTEMPT ONE, SLOWER & MORE MEMORY

/*
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let rods = {}, result = 0
    for (i=0; i<rings.length; i+=2) {
        let pair = rings.slice(i, i+2)
        if (!rods[pair[1]]) {rods[pair[1]] = {}}
        let r = rods[pair[1]]
        r[pair[0]] ? r[pair[0]] += 1 : r[pair[0]] = 1
    }
    for (const [key, value] of Object.entries(rods)) {
        if (Object.keys(value).length === 3) {result += 1}
    }
    return result
};

// Runtime: 76 ms, faster than 70.90% of JavaScript online submissions for Rings and Rods.
// Memory Usage: 39.2 MB, less than 25.00% of JavaScript online submissions for Rings and Rods.