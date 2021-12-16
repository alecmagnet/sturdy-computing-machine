// https://leetcode.com/problems/count-vowel-substrings-of-a-string/

/*
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {
    const dict = {a: 1, e: 1, i: 1, o: 1, u: 1}
    let i = 0, k = 0, count = 0, vowels = {}, subVow = {}
    while (k < word.length) {
        if (dict[word[k]]) {
            vowels[word[k]] = vowels[word[k]] + 1 || 1
            if (Object.keys(vowels).length >= 5) {
                count += 1
                subVow = Object.assign(subVow, vowels)
                for (let j=i; j<=k-5; j++) {
                    subVow[word[j]] -= 1
                    if (subVow[word[j]] === 0) {break}
                    else {
                        ++count
                    }
                }
            }
            k++
        } else {
            vowels = {}
            i = ++k
        }
    }
    return count
};

// Runtime: 139 ms, faster than 41.38% of JavaScript online submissions for Count Vowel Substrings of a String.
// Memory Usage: 40 MB, less than 93.49% of JavaScript online submissions for Count Vowel Substrings of a String.