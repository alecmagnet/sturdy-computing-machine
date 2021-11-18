

// https://leetcode.com/problems/check-if-the-sentence-is-pangram/submissions/

var checkIfPangram = function(sentence) {
    return new Set(sentence.split("")).size === 26 ? true : false
};

// https://leetcode.com/problems/truncate-sentence/submissions/

var truncateSentence = function(s, k) {
    return s.split(" ").slice(0, k).join(" ")
};

// https://leetcode.com/problems/shuffle-the-array/submissions/

var shuffle = function(nums, n) {
    let retArr = []
    for (i=0; i<n; i++) {
        retArr.push(nums[i])
        retArr.push(nums[n+i])
    }
    return retArr
};

//https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/submissions/

var subtractProductAndSum = function(n) {
    arr = Array.from(String(n), Number)
    return arr.reduce((a,b) => a*b) - arr.reduce((a,b) => a+b)
};

// https://leetcode.com/problems/defanging-an-ip-address/submissions/

var defangIPaddr = function(address) {
    return address.replaceAll(".", "[.]")
};

//https://leetcode.com/problems/final-value-of-variable-after-performing-operations/submissions/

var finalValueAfterOperations = function(operations) {
    let val = 0
    for (i = 0; i < operations.length; i++){
        if (operations[i].includes("+")) val = val + 1
        if (operations[i].includes("-")) val = val - 1
    }
    return val
};