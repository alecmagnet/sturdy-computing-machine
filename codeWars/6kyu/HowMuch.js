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

