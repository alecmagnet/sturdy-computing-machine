// https://www.hackerrank.com/challenges/one-month-preparation-kit-plus-minus/problem

function plusMinus(arr) {
    let l = arr.length
    console.log((arr.filter(e => e > 0).length/l).toPrecision(6))
    console.log((arr.filter(e => e < 0).length/l).toPrecision(6))
    console.log((arr.filter(e => e == 0).length/l).toPrecision(6))
}