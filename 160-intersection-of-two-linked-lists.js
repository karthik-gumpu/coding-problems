/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let temp1 = headA;
  let lenA = 1;
  let lenB = 1;
  while (temp1.next) {
    temp1 = temp1.next;
    lenA++;
  }
  let temp2 = headB;
  while (temp2.next) {
    temp2 = temp2.next;
    lenB++;
  }
  if (temp1 !== temp2) {
    return null;
  }
  const diff = Math.abs(lenA - lenB);
  temp1 = headA;
  temp2 = headB;
  if (lenA > lenB) {
    while (lenA > lenB) {
      temp1 = temp1.next;
      lenA--;
    }
  } else {
    while (lenA < lenB) {
      temp2 = temp2.next;
      lenB--;
    }
  }

  while (temp2) {
    if (temp1 == temp2) {
      return temp2;
    }
    temp2 = temp2.next;
    temp1 = temp1.next;
    lenB++;
  }
  return null;
};
