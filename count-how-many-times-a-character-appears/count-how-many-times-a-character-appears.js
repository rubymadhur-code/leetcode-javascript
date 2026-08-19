// Count how many times a character appears

let str = "javascript";
let char = "a";

function countChar(str, char) {
  let ans = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      ans++;
    }
  }
  return ans;
}
console.log(countChar(str, char));
