// https://www.hackerrank.com/challenges/one-month-preparation-kit-flipping-bits/problem

function flippingBits(n) {
    let oneStr = (n).toString(2)
    let str = ""
    if (oneStr.length < 32) {
        for (let j=0; j<(32-oneStr.length); j++){
            str = "0" + str
        }
        oneStr = str + oneStr
    }
    let ret = ""
    for (let i=0; i<32; i++) {
        oneStr.charAt(i) == "0" ? ret = ret + "1" : ret = ret + "0"
    }
    return parseInt(ret, 2)
}

