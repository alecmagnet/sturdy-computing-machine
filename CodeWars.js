



// https://www.codewars.com/kata/52774a314c2333f0a7000688/

function validParentheses(parens) {
  if (parens === '()' || parens === '') {
    return true
  } else if (!parens.includes('()')) {
    return false 
  } else {
    let newStr = parens.replace('()', '')
    return validParentheses(newStr)
  }
}


// https://www.codewars.com/kata/52685f7382004e774f0001f7/

function humanReadable (seconds) {
  const pad = (n) => n < 10 ? `0${n}` : `${n}`
  let hrs = Math.floor(seconds/3600)
  let mins = Math.floor((seconds % 3600)/60)
  let secs = seconds - (mins*60) - (hrs*3600)
  return pad(hrs)+":"+pad(mins)+":"+pad(secs);
}


// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str){
  return str.split(' ').map(el => el.match(/\W/) ? el : el.slice(1, el.length)+el.charAt(0)+"ay").join(' ')
}


// https://www.codewars.com/kata/526571aae218b8ee490006f4

var countBits = function(n) {
  return n.toString(2).split('').filter(e => e == 1).length
};


// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

function findOutlier(integers){
  console.log(integers)
  let n = integers.length
  let ret = null
  for (i=0; i<n; i++) {
    let r = integers[i]
    if (
      (
        r%2 === 0 
      &&
        integers[((i+1) % n + n)%n]%2 !==0
      && 
        integers[((i+2) % n + n) % n]%2 !== 0
      )
    ||
      (
        r%2 !== 0 
      &&
        integers[((i+1) % n + n)%n]%2 ===0
      && 
        integers[((i+2) % n + n) % n]%2 === 0
      )
    ) {  
      ret = r
      break
    } else {
      continue
    }
  }
  return ret
}

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
