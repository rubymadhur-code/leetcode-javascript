// Find the shortest string

let words = ["flower", "cat", "javascript", "dog"];
let shortest = words[0].length;
let shortestElement = words[0];

function shortestString(words) {
  for (let i = 0; i < words.length; i++) {
    if (shortest > words[i].length) {
      shortest = words[i].length;
      shortestElement = words[i];
    }
  }
  return shortestElement;
}
console.log(shortestString(words));
