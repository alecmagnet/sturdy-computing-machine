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
