/**
 * Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
 *
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
var mergeTwoLists = function (l1, l2) {
  let l3 = null;
  let lastNode = null;
  while (l1 || l2) {
    const newNode = new ListNode();
    if (l1 && l2) {
      if (l1.val < l2.val) {
        newNode.val = l1.val;
        l1 = l1.next;
      } else {
        newNode.val = l2.val;
        l2 = l2.next;
      }
    } else if (l1) {
      newNode.val = l1.val;
      l1 = l1.next;
    } else if (l2) {
      newNode.val = l2.val;
      l2 = l2.next;
    }
    if (l3 == null) {
      l3 = newNode;
    } else {
      lastNode.next = newNode;
    }
    lastNode = newNode;
  }
  return l3;
};
