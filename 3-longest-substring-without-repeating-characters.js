/**
 * @param {string} s
 * @return {number}
 */
let cache = {};
const getmax = (max, large) => Math.max(max, large.length);
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let large = "";
  let start = 0;
  for (let i = start; i < s.length; i++) {
    let c = s[i];
    if (cache[c]) {
      max = getmax(max, large);
      large = "";
      cache = {};

      i = start++;
    } else {
      cache[c] = 1;
      large += c;
    }
  }
  return getmax(max, large);
};

console.log(lengthOfLongestSubstring("au"));
