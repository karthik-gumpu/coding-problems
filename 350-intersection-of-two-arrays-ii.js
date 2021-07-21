/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection.
 * Each element in the result must appear as many times as it shows in both arrays and
 * you may return the result in any order.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    return intersect(nums2, nums1);
  }
  const result = [];
  const visited = nums2;
  for (let item of nums1) {
    const idx = visited.indexOf(item);
    if (idx !== -1) {
      visited[idx] = -1;
      result.push(parseInt(item, 10));
    }
  }
  return result;
};

console.log(intersect([3, 1, 2], [1, 1]));
