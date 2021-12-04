// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

function rgb(r, g, b){
  function helper (num) {
    if (num < 0) {return "00"}
    else if (num > 255) {return "FF"}
    else {return num.toString(16).padStart(2,0).toUpperCase()}
  }
  return helper(r)+helper(g)+helper(b)
}
