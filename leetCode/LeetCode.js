
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted

var twoSum = function(nums, target) {
    let i = 0, j = nums.length -1
    while (i < j) {
        if (nums[i] + nums[j] < target) {i++}
        else if (nums[i] + nums[j] > target) {j--}
        else if (nums[i] + nums[j] == target) {return [i+1, j+1]}
    }
};


// https://leetcode.com/problems/move-zeroes

var moveZeroes = function(nums) {
    let k = 0
    for (i=0; i<nums.length; i++) {
        if (nums[i] != 0) {
            [nums[k++], nums[i]] = [nums[i], nums[k]]
        }
    }
};

var moveZeroes = function(nums) {
    for (i=0; i<nums.length; i++) {
        if (nums[i] === 0) {
            nums.push(nums.splice(i,1))
            i--
        }
    }
};


// IMPORTANT https://leetcode.com/problems/squares-of-a-sorted-array

var sortedSquares = function(nums) {
    let r = []
    let start = 0
    let end = nums.length - 1
    let pos = end
    while (start <= end) {
        if (nums[start]**2 > nums[end]**2) {
            r[pos--] = nums[start++]**2
        } else {
            r[pos--] = nums[end--]**2
        }
    }
    return r
};



// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

var kidsWithCandies = function(candies, extraCandies) {
    max = Math.max(...candies)
    return candies.map(kid => kid + extraCandies >= max ? true : false)
};

// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/

var maxDepth = function(s) {
    let r = 0
    let a = s.split('')
    for (i=0; i<a.length; i++) {
        let b = a.slice(0, i)
        let q = b.filter(e => e === '(').length - b.filter(e => e === ')').length
        if (q > r) r = q
    }
    return r
};


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

// https://leetcode.com/problems/check-if-the-sentence-is-pangram/submissions/

var checkIfPangram = function(sentence) {
    return new Set(sentence.split("")).size === 26 ? true : false
};