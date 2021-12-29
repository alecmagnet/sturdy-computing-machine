// https://leetcode.com/problems/keyboard-row/

/**
 * @param {string[]} words
 * @return {string[]}
 */

var findWords = function(words) {
    let ans = [],
        row1 = "qwertyuiop", 
        row2 = "asdfghjkl", 
        row3 = "zxcvbnm",
        dict = {}
    const makeDict = (row, num) => {
        for (let i=0; i<row.length; i++) {
            dict[row[i]] = num   
        }
    }
    makeDict(row1, 1)
    makeDict(row2, 2)
    makeDict(row3, 3)
    for (let origWord of words) {
        let word = origWord.toLowerCase(), 
            rowNum = dict[word[0]],
            len = origWord.length
        for (let j=0; j<len; j++) {
            if (j === len-1 
                && dict[word[j]] === rowNum) 
            {
                ans.push(origWord)        
            } else if (dict[word[j]] !== rowNum) {
                break
            }
        }
    }
    return ans
};

// Runtime: 68 ms, faster than 84.05% of JavaScript online submissions for Keyboard Row.
// Memory Usage: 38.7 MB, less than 52.92% of JavaScript online submissions for Keyboard Row.


// NOT MAKING LENGTH A VARIABLE SLOWED THIS DOWN TO A CRAWL:
var findWords = function(words) {
    let ans = [],
        row1 = "qwertyuiop", 
        row2 = "asdfghjkl", 
        row3 = "zxcvbnm",
        dict = {},
    const makeDict = (row, num) => {
        for (let i=0; i<row.length; i++) {
            dict[row[i]] = num   
        }
    }
    makeDict(row1, 1)
    makeDict(row2, 2)
    makeDict(row3, 3)
    for (let origWord of words) {
        let word = origWord.toLowerCase()
        let rowNum = dict[word[0]]
        for (let j=0; j<word.length; j++) {
            if (j === word.length-1 
                && dict[word[j]] === rowNum) 
            {
                ans.push(origWord)        
            } else if (dict[word[j]] !== rowNum) {
                break
            }
        }
    }
    return ans
};

// Runtime: 121 ms, faster than 5.45% of JavaScript online submissions for Keyboard Row.
// Memory Usage: 38.6 MB, less than 70.82% of JavaScript online submissions for Keyboard Row.



// INSTATIATING DICT FIRST DID NOT MAKE IT FASTER
    // const dict = {
    //   q: 1,
    //   w: 1,
    //   e: 1,
    //   r: 1,
    //   t: 1,
    //   y: 1,
    //   u: 1,
    //   i: 1,
    //   o: 1,
    //   p: 1,
    //   a: 2,
    //   s: 2,
    //   d: 2,
    //   f: 2,
    //   g: 2,
    //   h: 2,
    //   j: 2,
    //   k: 2,
    //   l: 2,
    //   z: 3,
    //   x: 3,
    //   c: 3,
    //   v: 3,
    //   b: 3,
    //   n: 3,
    //   m: 3
    // }


// FASTER SOLUTION FROM https://leetcode.com/problems/keyboard-row/discuss/897607/100-with-sets-and-filter

var findWords = function(words) {
    const t = new Set("qwertyuiop");
    const m = new Set("asdfghjkl");
    const b = new Set("zxcvbnm");
    
    return words.filter((word) => {
        const chars = word.toLowerCase().split("");
        return (chars.every(c => t.has(c)) || chars.every(c => m.has(c)) || chars.every(c => b.has(c)));
    });
};