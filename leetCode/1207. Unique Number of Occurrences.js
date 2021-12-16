// https://leetcode.com/problems/unique-number-of-occurrences/

var uniqueOccurrences = function(arr) {
    let hash = {}, uniqHash = {}
    for (elem of arr) {
        hash[elem] = hash[elem] + 1 || 1
    }
    let valuesArr = Object.values(hash)
    for (val of valuesArr) {
        if (uniqHash[val]) {return false}
        else {uniqHash[val] = 1}
    }
    return true
};

// Runtime: 83 ms, faster than 25.20% of JavaScript online submissions for Unique Number of Occurrences.
//Memory Usage: 40.5 MB, less than 32.11% of JavaScript online submissions for Unique Number of Occurrences.
