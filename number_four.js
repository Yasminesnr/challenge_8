// Implement a queue data structure in JavaScript using an array

// function to add elements to the queue
function addElement(queue, element) {
  queue.push(element);
}

// function to remove elements from the queue
function removeElement(queue) {
  if (isEmpty(queue)) console.log("Empty queue");
  else queue.shift();
}

// function to determine whether the queue is empty
function isEmpty(queue) {
  if (queue.length === 0) return true;
  else return false;
}

// test the functions
let queue = [];
addElement(queue, 11);
addElement(queue, 12);
addElement(queue, 13);
removeElement(queue);
console.log(queue);
console.log(isEmpty(queue));
