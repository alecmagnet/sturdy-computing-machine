// https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [[1]]
    if (numRows === 1) return result
    for (let i=1; i<numRows; i++) {
        let prevRow = result[i-1],
            newRow = [1]
        for (let j=0; j<prevRow.length-1; j++) {
            newRow.push(prevRow[j]+prevRow[j+1])
        }
        newRow.push(1)
        result.push(newRow)
    }
    return result
};

// Runtime: 121 ms, faster than 7.33% of JavaScript online submissions for Pascal's Triangle.
// Memory Usage: 38.3 MB, less than 86.43% of JavaScript online submissions for Pascal's Triangle.