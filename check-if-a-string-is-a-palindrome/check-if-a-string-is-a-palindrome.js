// Check if a string is a palindrome

let str = "hello";

function palindromeString(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return str === reverse;
}
console.log(palindromeString(str));
