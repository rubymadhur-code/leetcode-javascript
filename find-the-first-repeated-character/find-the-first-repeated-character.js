// Find the first repeated character

let str = "programming";

function firstRepeatChar(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    for (let j = i + 1; j < str.length; j++) {
      if (char === str[j]) {
        return str[j];
      }
    }
  }
  return null;
}
console.log(firstRepeatChar(str));
