/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let d = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    let n = d + digits[i] + (i === digits.length - 1 ? 1 : 0);
    d = Math.floor(n / 10);
    let r = n % 10;
    digits[i] = r;
    if (d == 0) {
      break;
    }
  }
  if (d) {
    digits.unshift(d);
  }
  return digits;
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
