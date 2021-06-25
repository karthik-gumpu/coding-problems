const input = [5, 8, 1, 6, 2, 8, 77, 2, 4, 2, 66];

const sort = (data) => {
  for (let i = 0; i < data.length; i++) {
    let minIndex = i;
    for (let j = i; j < data.length; j++) {
      if (data[minIndex] > data[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = data[minIndex];
      data[minIndex] = data[i];
      data[i] = temp;
    }
  }
  return data;
};

console.log(sort(input));
