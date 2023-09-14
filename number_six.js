// Given two arrays of numbers,write a function that returns a new array containing the unique elements from both arrays.

function UniqueElements(arr1, arr2) {
  new_arr = arr1.concat(arr2);
  new_arr = Array.from(new Set(new_arr));
  return new_arr;
}

// test the function
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
console.log(UniqueElements(arr1, arr2));
