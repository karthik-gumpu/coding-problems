const input = [5, 8, 1, 6, 2, 8, 77, 2, 4, 2, 66];

const divide = (data, low, high) => {
  if (high === low) {
    return [data[low]];
  }
  const mid = low + Math.floor((high - low) / 2);

  const a = divide(data, low, mid);
  const b = divide(data, mid + 1, high);
  return merge(a, b);
};

const merge = (a, b) => {
  const c = [];
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      c.push(a[i]);
      i++;
    } else if (a[i] > b[j]) {
      c.push(b[j]);
      j++;
    }
  }
  while (i < a.length) {
    c.push(a[i]);
    i++;
  }
  while (j < b.length) {
    c.push(b[j]);
    j++;
  }
  return c;
};

const sort = (data) => {
  return divide(data, 0, data.length - 1);
};

console.log(sort(input));
