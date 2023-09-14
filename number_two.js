//Create an object representing a person with properties such as name, age, and email.
// Write a function that takes an array of these objects and returns a new array containing only the people who are over 30 years old.
let person1 = {
  name: "person1",
  age: 19,
  email: "person1@gmail.com",
};
let person2 = {
  name: "person2",
  age: 31,
  email: "person2@gmail.com",
};
let person3 = {
  name: "person3",
  age: 25,
  email: "person3@gmail.com",
};
let person4 = {
  name: "person4",
  age: 45,
  email: "person4@gmail.com",
};
function over30YearsOld(arr) {
  let over30 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age > 30) {
      over30.push(arr[i]);
    }
  }
  return over30;
}
// testing the function
let people = [person1, person2, person3, person4];
console.log(over30YearsOld(people));
