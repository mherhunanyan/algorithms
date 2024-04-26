function isPalindrome(num) {
  if (num < 0) {
    return false;
  }
  return reverseNumber(num) === num;
}

function reverseNumber(num) {
  let rev = 0;
  while (num !== 0) {
    rev = (num % 10) + rev * 10;
    num = Math.floor(num / 10);
  }
  return rev;
}

console.log(isPalindrome(545));
