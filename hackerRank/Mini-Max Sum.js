// https://www.hackerrank.com/challenges/one-month-preparation-kit-mini-max-sum/problem

function miniMaxSum(arr) {
    // Attempt one
    const sumArr = arr.map(e => arr.filter(el => el !== e).reduce((a,b) => a+b))
    console.log(`${Math.min(...sumArr)} ${Math.max(...sumArr)}`)
    
    // Eli's with no for loop
    function miniMaxSum(arr) {
        let sum = arr.reduce( (a,b) => a + b )
        let min = Math.min.apply(null, arr);
        let max = Math.max.apply(null, arr);
        let minSum = sum - max;
        let maxSum = sum - min;
        console.log(`${minSum} ${maxSum}`)
    }

    // Attempt three
    let arrTotal = arr.reduce((a,b) => a+b)
    let sumArr = []
    for (let i=0; i<arr.length; i++) {
        sumArr.push(arrTotal - arr[i])
    }
    console.log(`${Math.min.apply(null, sumArr)} ${Math.max.apply(null, sumArr)}`)
}
