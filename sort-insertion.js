const input = [5, 8, 1, 6, 2, 8, 77, 2, 4, 2, 66];

const sort = (data) => {
  for (let i = 0; i < data.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (data[j] < data[j - 1]) {
        const temp = data[j];
        data[j] = data[j - 1];
        data[j - 1] = temp;
      }
    }
  }
  return data;
};

console.log(sort(input));
