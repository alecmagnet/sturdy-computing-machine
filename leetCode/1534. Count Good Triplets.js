// https://leetcode.com/problems/count-good-triplets/submissions/

var countGoodTriplets = function(arr, a, b, c) {
    let counter = 0
    for (i = 0; i < arr.length - 2; i++) {
        for (j = i+1; j < arr.length -1; j++) {
            if (Math.abs(arr[i] - arr[j]) <=a) {
                for (k=j+1; k<arr.length; k++) {
                    if (Math.abs(arr[j] - arr[k])<=b && Math.abs(arr[i] - arr[k]) <= c) {
                        counter = counter + 1
                    }
                }
            }
        }
    }
    return counter
};
