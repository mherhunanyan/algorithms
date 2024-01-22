// A repdigit is a positive number composed out of the same digit. Create a function that takes an integer and returns whether it’s a repdigit or not.

function isRepdigit(num) {
  if (!Number.isInteger(num)) {
    return false;
  }

  if (num < 0) {
    return false;
  }

  const str = num + '';
  for (let i = 1; i < str.length; ++i) {
    for (let j = 0; j < str.length; ++j) {
      if (str[i] !== str[j]) {
        return false;
      }
    }
  }
  return true;
}


console.log(isRepdigit(555)) // ➞ true
console.log(isRepdigit(0)) // ➞ true
console.log(isRepdigit(-11)) // ➞ false

