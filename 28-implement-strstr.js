/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
/**
 * if (needle.length == 0) {
 *       return 0;
 *   }
 *   return haystack.indexOf(needle)
 */
var strStr = function (haystack, needle) {
  if (needle.length == 0) {
    return 0;
  }
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle[0]) {
      let j = 0;
      for (; j < needle.length; j++) {
        if (haystack[j + i] !== needle[j]) {
          break;
        }
      }
      if (j == needle.length) {
        return i;
      }
    }
  }
  return -1;
};

console.log(strStr("hello", "ll"));
