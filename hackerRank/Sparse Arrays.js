// https://www.hackerrank.com/challenges/one-month-preparation-kit-sparse-arrays/problem

function matchingStrings(strings, queries) {
    // solution one
    return queries.map(e => strings.filter(el => el === e).length)

}	
