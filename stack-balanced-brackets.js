"use strict";

/*
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

const Stack = class {
  constructor() {
    this.data = [];
  }
  push(item) {
    this.data.push(item);
  }
  pop() {
    return this.data.pop();
  }
  isEmpty() {
    return !Boolean(this.data.length);
  }
};

function isBalanced(s) {
  // Write your code here
  let i = 0;
  const stack = new Stack();
  while (i < s.length) {
    if (s[i] == "[" || s[i] == "{" || s[i] == "(") {
      stack.push(s[i]);
    } else {
      const lastNode = stack.pop();
      console.log(lastNode);
      if (s[i] == "]") {
        if (lastNode != "[") {
          return false;
        }
      }
      if (s[i] == "}") {
        if (lastNode != "{") {
          return false;
        }
      }
      if (s[i] == ")") {
        if (lastNode != "(") {
          return false;
        }
      }
    }
    i++;
  }
  return stack.isEmpty();
}

console.log(isBalanced("{{[[(())]]}}"));
