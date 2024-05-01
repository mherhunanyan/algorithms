function mergeAlternately(word1, word2) {
  const res = [];
  const maxLen = Math.max(word1.length, word2.length);
  let i = 0;
  while (i < maxLen) {
    if (i < word1.length) {
      res.push(word1[i]);
    }
    if (i < word2.length) {
      res.push(word2[i]);
    }
    ++i;
  }
  return res.join('');
}

const word1 = "ccccccc";
const word2 = "aaa";
console.log(mergeAlternately(word1, word2));