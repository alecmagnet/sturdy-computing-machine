//https://leetcode.com/problems/final-value-of-variable-after-performing-operations/submissions/

var finalValueAfterOperations = function(operations) {
    let val = 0
    for (i = 0; i < operations.length; i++){
        if (operations[i].includes("+")) val = val + 1
        if (operations[i].includes("-")) val = val - 1
    }
    return val
};