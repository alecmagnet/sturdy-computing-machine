//https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

var subtractProductAndSum = function(n) {
    arr = Array.from(String(n), Number)
    return arr.reduce((a,b) => a*b) - arr.reduce((a,b) => a+b)
};