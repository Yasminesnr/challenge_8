// Write a function that takes a string as input and returns a new string with all the vowels removed.

// first we define a fuction that determines whether a char in a vowel or not
function isVowel(char) {
  // convert the char into lowercase because js in case sensitive
  char = char.toLowerCase();
  // return true if the char is a vowel
  return "aeuio".includes(char);
}

function remove_vowels(string) {
  new_string = "";
  // iterate through the string
  for (let char of string) {
    if (!isVowel(char)) new_string += char;
  }
  return new_string;
}

// test the code
string = "YASMINE";
console.log(remove_vowels(string));
