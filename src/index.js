module.exports = function reverse (n) {
  const nToStr = Math.abs(n).toString();
  let revNum = '';
  for (let i = 1; i <= nToStr.length; i++) {
    let lastChar = nToStr.charAt(nToStr.length - i);
    revNum += lastChar; 
  }
  return +revNum;
}
