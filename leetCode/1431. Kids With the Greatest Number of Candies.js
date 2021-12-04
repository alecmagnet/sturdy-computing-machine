// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

var kidsWithCandies = function(candies, extraCandies) {
    max = Math.max(...candies)
    return candies.map(kid => kid + extraCandies >= max ? true : false)
};