var lengthOfLongestSubstring = function(s) {
    if (s.length < 1) {return 0}
    let i = 0
    let charArr = []
    while (!charArr.includes(s.charAt(i))) {
        charArr.push(s.slice(i,1))
        i++
    }
    let maxLength = i
    let k = 2*i
    while (k < s.length) {
        console.log(s, "i:", 1, "k:", k, "maxLength:", maxLength)
        let uniqSet = new Set(s.slice(i,maxLength))
        if (uniqSet.size < maxLength) {
            i++
            k++
        } else {
            maxLength++
            k++
        }     
    }
    return maxLength
};

lengthOfLongestSubstring("pwwkew")