
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

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
