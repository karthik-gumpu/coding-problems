/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let y = Math.abs(x);
  let n = 0;
  while (y > 0) {
    console.log(y);
    const r = y % 10;
    n = n * 10 + r;
    y = Math.floor(y / 10);
  }
  const finalValue = x < 0 ? -n : n;
  return finalValue < 2 ** 31 - 1 && finalValue > -(2 ** 31) ? finalValue : 0;
};
console.log(reverse(1534236469));
