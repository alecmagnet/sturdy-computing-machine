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
