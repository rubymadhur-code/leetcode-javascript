// Find the longest string

let words = ["cat", "elephant", "dog", "tiger"];

let longest = words[0].length;
let longestString = words[0];

function findLongestString(words) {
  for (let i = 0; i < words.length; i++) {
    if (longest < words[i].length) {
      longest = words[i].length;
      longestString = words[i];
    }
  }
  return longestString;
}
console.log(findLongestString(words));
