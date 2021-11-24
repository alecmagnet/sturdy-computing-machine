

// https://www.codewars.com/kata/55b4d87a3766d9873a0000d4/train/javascript

function howmuch(m, n) {
  let arr = []
  let p = m
  let q = n
  if (m > n) {
    p=n
    q=m
  }
  for (i=p; i<q+1; i++) {
    let a = (i-1)/9
    let b = (i-2)/7
    if (a === Math.floor(a) && b === Math.floor(b)) arr.push([`M: ${i}`, `B: ${b}`, `C: ${a}`])
  }
  return arr
}


// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

// VERY MUCH NOT BEST PRACTICE, BUT IT'S MY FIRST RECURSIVE ALGO!!! YAY!!
function persistence(num) {
  let ret = 0
  if (num < 10) return ret
  function recursive(n) {
    ++ret
    let prod = n.toString().split('').reduce((a,b) => Number(a)*Number(b))
    if (prod < 10) return ret
    recursive(prod)
  }
  recursive(num)
  return ret
}


// https://www.codewars.com/kata/5287e858c6b5a9678200083c

function narcissistic(value) {
  str = value.toString()
  l = str.length
  r = 0
  for (i=0; i<l; i++) {
    r = r + parseInt(str.charAt(i))**l
  }
  return r === value ? true : false
}
