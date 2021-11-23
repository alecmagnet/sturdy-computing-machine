

// https://www.hackerrank.com/challenges/one-month-preparation-kit-mini-max-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

function miniMaxSum(arr) {
    // Write your code here
    // const sumArr = arr.map(e => arr.filter(el => el !== e).reduce((a,b) => a+b))
    // console.log(`${Math.min(...sumArr)} ${Math.max(...sumArr)}`)

    // Attempt two
    // let minVal = 0
    // let maxVal = 0
    // for (i=0; i<arr.length; i++) {
    //     let sumArr = 
    // }
    
    // Eli's with no for loop
    // function miniMaxSum(arr) {
    //     let sum = arr.reduce( (a,b) => a + b )
    //     let min = Math.min.apply(null, arr);
    //     let max = Math.max.apply(null, arr);
    //     let minSum = sum - max;
    //     let maxSum = sum - min;
    //     console.log(`${minSum} ${maxSum}`)
    // }

    // Attempt three
    let arrTotal = arr.reduce((a,b) => a+b)
    let sumArr = []
    for (let i=0; i<arr.length; i++) {
        sumArr.push(arrTotal - arr[i])
    }
    console.log(`${Math.min.apply(null, sumArr)} ${Math.max.apply(null, sumArr)}`)
}

// https://www.hackerrank.com/challenges/one-month-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

function plusMinus(arr) {
    let l = arr.length
    console.log((arr.filter(e => e > 0).length/l).toPrecision(6))
    console.log((arr.filter(e => e < 0).length/l).toPrecision(6))
    console.log((arr.filter(e => e == 0).length/l).toPrecision(6))
}

