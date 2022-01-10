// https://leetcode.com/problems/pascals-triangle-ii/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1]
    if (rowIndex === 1) return [1, 1]
    let resultHash = {
        0: [1],
        1: [1,1]
    }
    for (let i=2; i<=rowIndex; i++) {
        let newRow = [1],
            prevRow = resultHash[i-1]
        for (let j=0; j<prevRow.length - 1; j++) {
            newRow.push(prevRow[j] + prevRow[j+1])
        }
        newRow.push(1)
        resultHash[i] = newRow
    }
    return resultHash[rowIndex]
};

// Runtime: 140 ms, faster than 5.03% of JavaScript online submissions for Pascal's Triangle II.
// Memory Usage: 38.5 MB, less than 82.93% of JavaScript online submissions for Pascal's Triangle II.