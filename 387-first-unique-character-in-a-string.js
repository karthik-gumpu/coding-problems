/**
 * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const cache = {};
  const queue = [];
  for (let i in s) {
    if (cache[s[i]]) {
      cache[s[i]] += 1;
    } else {
      cache[s[i]] = 1;
      queue.push({ a: s[i], b: i });
    }
  }
  for (let j of queue) {
    if (cache[j.a] == 1) {
      return j.b;
    }
  }
  return -1;
};

console.log(firstUniqChar("loveleetcode"));
