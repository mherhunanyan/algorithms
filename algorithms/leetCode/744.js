function nextGreatestLetter(letters, target) {
  let targetLetter = target.charCodeAt();
  let maxLetter = letters[letters.length - 1].charCodeAt();
  if (targetLetter >= maxLetter) {
    return letters[0];
  }

  for (let i = 0; i < letters.length; ++i) {
    let iLetter = letters[i].charCodeAt();
    if (iLetter > targetLetter) {
      return letters[i];
    }
  }
}

const letters = ["c","f","j"];
console.log(nextGreatestLetter(letters, "a"));
