// Write a function that takes an array of numbers and returns a new array containing only the even numbers.
function even_numbers(array) {
  even_num = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      even_num.push(array[i]);
    }
  }
  return even_num;
}
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(even_numbers(arr));
