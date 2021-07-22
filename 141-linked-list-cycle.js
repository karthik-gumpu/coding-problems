/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let temp1 = head;
  let ahead = head;
  if (head == null || head.next == null) {
    return false;
  }
  while (ahead !== null && ahead.next != null) {
    temp1 = temp1.next;
    ahead = ahead.next.next;
    if (temp1 == ahead) {
      return true;
    }
  }
  return false;
};
