// Implement a stack data structure in JavaScript using an array.

// function to push elements into the stack
function addElement(stack, element) {
  stack.push(element);
}

// function to remove elements from the stack
function removeElement(stack) {
  if (isEmpty(stack)) console.log("Empty stack");
  else stack.pop();
}

// function to determine whether the stack is empty or not
function isEmpty(stack) {
  if (stack.length === 0) return true;
  else return false;
}

// test the functions
let stack = [];
addElement(stack, 11);
removeElement(stack);
isEmpty(stack);
console.log(stack);
removeElement(stack);
