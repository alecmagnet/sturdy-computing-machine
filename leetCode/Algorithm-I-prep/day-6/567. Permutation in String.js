// https://leetcode.com/problems/permutation-in-string/

// BASED ON https://leetcode.com/problems/permutation-in-string/discuss/1400185/JS-optimized-sliding-window-O(n)-time-O(1)-space

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let l1 = s1.length,
        l2 = s2.length
    if (l1 > l2) {return false}
    let m1 = new Map(),
        m2 = new Map()
    for (let i=0; i<l1; i++) {
        m1.set(s1[i], m1.get(s1[i]) + 1 || 1)
        m2.set(s2[i], m2.get(s2[i]) + 1 || 1)
    }
    let left = 0,
        right = l1 - 1
    
    while (right < l2) {
        if (areMapsEqual(m1, m2)) {return true}
        let key1Count = m2.get(s2[left])
        if (key1Count > 1) {m2.set(s2[left], key1Count -1)}
        else {m2.delete(s2[left])}
        ++left
        ++right
        m2.set(s2[right], m2.get(s2[right]) + 1 || 1)
    }
    return false
};

function areMapsEqual(map1, map2) {
    if (map1.size !== map2.size) {return false}
    for (let key of map1.keys()) {
        if (!map2.has(key) || map1.get(key) !== map2.get(key)) {return false}
    }
    return true
}

// Runtime: 96 ms, faster than 83.23% of JavaScript online submissions for Permutation in String.
// Memory Usage: 41.7 MB, less than 70.17% of JavaScript online submissions for Permutation in String.