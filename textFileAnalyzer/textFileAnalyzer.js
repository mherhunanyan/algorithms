const fs = require("fs");

function countLettersAndWords(text) {
  let letters = {};
  let words = {};
  let word = "";
  let lettersCount = 0;
  let sentencesCount = (text.match(/[.!?]/g) || []).length;

  for (let i = 0; i < text.length; i++) {
    let char = text[i].toLowerCase();
    if (char >= "a" && char <= "z") {
      letters[char] = (letters[char] || 0) + 1;
      lettersCount++;
      word += char;
    } else if (word.length > 0) {
      words[word] = (words[word] || 0) + 1;
      word = "";
    }
  }

  return { letters, words, lettersCount, sentencesCount };
}

function findMostFrequent(dictionary) {
  let maxKey = "";
  let maxValue = 0;

  for (const key in dictionary) {
    if (dictionary[key] > maxValue) {
      maxValue = dictionary[key];
      maxKey = key;
    }
  }

  return maxKey;
}

function analyzeTextFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf8");

    const { letters, words, lettersCount, sentencesCount } =
      countLettersAndWords(data);
    const mostUsedLetter = findMostFrequent(letters);
    const mostUsedWord = findMostFrequent(words);

    return {
      wordCount: Object.keys(words).length,
      lettersCount: lettersCount,
      sentencesCount: sentencesCount,
      mostUsedLetter: mostUsedLetter,
      mostUsedWord: mostUsedWord === "" ? "0" : mostUsedWord,
    };
  } catch (err) {
    console.error(err);
    return null;
  }
}

let analysisResult = analyzeTextFile("./text.txt");
console.log(analysisResult);
