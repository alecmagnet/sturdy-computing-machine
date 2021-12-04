// DOES THIS ACTUALLY WORK??? TIME COMPLEXITY SEEMS OUT OF CONTROL

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
	return s.split(' ').map(elStr => {
		let elArr = elStr.split('')
		let i = 0
		let k = elArr.length - 1
		while (i < k) {
				[elArr[i], elArr[k]] = [elArr[k], elArr[i]]
				i++
				k--
		}
		return elArr.join('')
	}).join(' ')
};


// ATTEMPT TWO
var reverseWords = function(s) {
    let r = s.split('')
    let k = 0
    
    const reverse = (m, n) => {
        while (m<n) {
            [r[m++], r[n--]] = [r[n], r[m]]
        }
    }
    
    for (i=0; i<=r.length-1; i++) {
        if (r[i] == ' ') {
            let n = i-1
            reverse(k,n)
            k=i+1
        } else if (i === r.length-1) {
            reverse(k,i)
        }
    }
    
    return r.join('')
};


// ATTEMPT THREE (after reading discussion)
var reverseWords = function(s) {
    let word = ''
    let res = ''
    for (i=0; i<s.length; i++) {
        let val = s.charAt(i)
        if (val != ' ') {
            word = val + word
        } else {
            res = res + word + val
            word = ''
        }
    }
    return res += word
};