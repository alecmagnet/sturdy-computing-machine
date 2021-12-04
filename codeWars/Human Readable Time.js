// https://www.codewars.com/kata/52685f7382004e774f0001f7/

function humanReadable (seconds) {
  const pad = (n) => n < 10 ? `0${n}` : `${n}`
  let hrs = Math.floor(seconds/3600)
  let mins = Math.floor((seconds % 3600)/60)
  let secs = seconds - (mins*60) - (hrs*3600)
  return pad(hrs)+":"+pad(mins)+":"+pad(secs);
}