// https://www.hackerrank.com/challenges/one-month-preparation-kit-time-conversion/problem

function timeConversion(s) {
    let numHour = Number(s.slice(0,2))
    let tail = s.slice(2,8)
    if (s.includes('P') && numHour != 12) {
        return `${numHour+12}${tail}`
    } else if (s.includes('A') && numHour === 12) {
        return '00'+tail
    } else {
        return s.slice(0, 8)
    }
}
