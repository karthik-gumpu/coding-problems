/**
 * Definition for singly-linked list.
 *  */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let x = 0;
  let l3 = null;
  let last = null;
  while (l1) {
    let value = l1.val + l2.val + x;
    x = value / 10;
    const reminder = value % 10;
    const newNode = new ListNode(reminder);
    if (l3 == null) {
      l3 = newNode;
      last = l3;
    } else {
      last.next = newNode;
      last = newNode;
    }

    l1 = l1.next;
    l2 = l2.next;
  }
  return l3;
};
