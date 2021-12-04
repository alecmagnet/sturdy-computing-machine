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
