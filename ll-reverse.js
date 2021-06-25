"use strict";

const DoublyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
    this.prev = null;
  }
};

const DoublyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    let node = new DoublyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }

    this.tail = node;
  }
};

function printDoublyLinkedList(node) {
  let s = "";
  let last = null;
  while (node != null) {
    s += "," + node.data;
    last = node;
    node = node.next;
  }
  console.log(s);
  printDoublyLinkedList2(last);
}
function printDoublyLinkedList2(node) {
  let s = "";
  while (node != null) {
    s += "," + node.data;
    node = node.prev;
  }
  console.log(s);
}
/*
 * Complete the 'reverse' function below.
 *
 * The function is expected to return an INTEGER_DOUBLY_LINKED_LIST.
 * The function accepts INTEGER_DOUBLY_LINKED_LIST llist as parameter.
 */

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */

function reverse(node) {
  // Write your code here
  let prev = null;
  let current = node;
  let next = null;
  while (current != null) {
    next = current.next;
    current.prev = current.next;
    current.next = prev;
    prev = current;
    current = next;
    // printDoublyLinkedList(prev);
  }
  node = prev;
  return node;
}

function main() {
  let llist = new DoublyLinkedList();

  for (let i = 0; i < 5; i++) {
    const llistItem = i;
    llist.insertNode(llistItem);
  }
  printDoublyLinkedList(llist.head);
  console.log("---------------");
  let llist1 = reverse(llist.head);
  printDoublyLinkedList(llist1);
}

main();
