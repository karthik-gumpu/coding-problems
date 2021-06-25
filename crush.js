"use strict";

/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function arrayManipulation(n, queries) {
  // Write your code here
  let max = 0;
  const a = [];
  for (let i = 0; i < queries.length; i++) {
    for (let j = queries[i][0] - 1; j <= queries[i][1] - 1; j++) {
      a[j] = (a[j] || 0) + queries[i][2];
      if (max < a[j]) {
        max = a[j];
      }
    }
  }
  console.log(a, max);
  return max;
}

arrayManipulation(4, [
  //   [2, 3, 603],
  //   [1, 1, 286],
  //   [4, 4, 882],
  [1400906, 9889280, 90378],
  [6581237, 9872072, 87106],
  [4386373, 9779851, 52422],
  [198648, 4373818, 52898],
  [5770793, 6783792, 71662],
]);
