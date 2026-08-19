// Find the first character that is different

let words = ["apple", "apply", "apron"];

function findFirstDiffChar(words) {
  let ans = "";

  for (let i = 0; i < words[0].length; i++) {
    let firstChar = words[0][i];

    for (let j = 1; j < words.length; j++) {
      // console.log(words[j][i] + "=" + firstChar);

      if (words[j][i] !== firstChar) {
        ans = words[j][i];
        return ans;
      }
    }
  }
}
console.log(findFirstDiffChar(words));
