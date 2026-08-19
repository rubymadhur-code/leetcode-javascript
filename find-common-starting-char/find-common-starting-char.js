// Find the common starting characters

let words = ["coding", "code", "coder"];

function findStartChar(words) {
  let answer = "";

  for (let i = 0; i < words[0].length; i++) {
    let char = words[0][i];

    for (let j = 1; j < words.length; j++) {
      if (words[j][i] !== char) {
        return answer;
      }
    }
    answer += char;
  }
  return answer;
}

console.log(findStartChar(words)); 
