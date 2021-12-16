// https://leetcode.com/problems/jewels-and-stones/

var numJewelsInStones = function(jewels, stones) {
    let hash = {}, counter = 0
    for (jewel of jewels) {
        hash[jewel] = 1
    }
    for (stone of stones) {
        if (hash[stone] === 1) counter += 1
    }
    return counter
};

