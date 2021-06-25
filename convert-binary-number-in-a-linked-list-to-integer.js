var getDecimalValue = function (number) {
  let len = number.length;
  let result = 0;
  let i = 0;
  while (i < len) {
    const x = parseInt(number[i]);
    result += x * 2 ** (len - i - 1);
    console.log(x, result, x * 2 ** (len - i - 1));
    i++;
  }
  return result;
};

console.log(getDecimalValue([1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]));
