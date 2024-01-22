// Create a function that takes a number and returns an array with the digits of the number in reverse order.

function reverseArr(num) {
  if (!Number.isInteger(num)) {
    return false;
  }

  const revArr = [];

  while (num > 0) {
    revArr.push(num % 10);
    num = Math.floor(num / 10);
  }

  return revArr;
}

console.log(reverseArr(1485979)); // ➞ [9, 7, 9, 5, 8, 4, 1]
console.log(reverseArr(623478)); // ➞ [8, 7, 4, 3, 2, 6]
console.log(reverseArr(12345)); // ➞ [5, 4, 3, 2, 1]
