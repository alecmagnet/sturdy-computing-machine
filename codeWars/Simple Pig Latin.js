// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str){
  return str.split(' ').map(el => el.match(/\W/) ? el : el.slice(1, el.length)+el.charAt(0)+"ay").join(' ')
}