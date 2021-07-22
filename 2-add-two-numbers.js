/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let h1 = l1;
  let h2 = l2;
  let s = null;
  let last = null;
  let d = 0;
  while (h1 || h2) {
    let count = d + (h1?.val || 0) + (h2?.val || 0);
    d = Math.floor(count / 10);
    const node = new ListNode(count % 10);
    if (s == null) {
      s = node;
    } else {
      last.next = node;
    }
    last = node;
    h1 = h1?.next;
    h2 = h2?.next;
  }
  if (d) {
    const node = new ListNode(d);
    last.next = node;
  }
  return s;
};
