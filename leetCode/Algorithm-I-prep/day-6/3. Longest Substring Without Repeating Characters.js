// https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) {return 0}
    let hash = {}
    let maxLength = 0
    let tempLength = 0
    let left = 0
    let right = 0
    while (right < s.length) {
        if (hash[s.charAt(right)]) {
            hash = {}
            left++
            right = left
            tempLength = 0
        }
        else {
            hash[s.charAt(right)] = 1
            right ++
            tempLength ++
        }
        maxLength = Math.max(maxLength, tempLength)
    } 
    return maxLength
};

// Runtime: 552 ms, faster than 11.35% of JavaScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 59.7 MB, less than 5.53% of JavaScript online submissions for Longest Substring Without Repeating Characters.



// FAILED ATTEMPT
var lengthOfLongestSubstring = function(s) {
    if (s.length < 1) {return 0}
    let i = 0
    let charArr = []
    while (!charArr.includes(s.charAt(i))) {
        charArr.push(s.slice(i,1))
        i++
    }
    let maxLength = i
    let k = 2*i
    while (k < s.length) {
        console.log(s, "i:", 1, "k:", k, "maxLength:", maxLength)
        let uniqSet = new Set(s.slice(i,maxLength))
        if (uniqSet.size < maxLength) {
            i++
            k++
        } else {
            maxLength++
            k++
        }     
    }
    return maxLength
};

lengthOfLongestSubstring("pwwkew")