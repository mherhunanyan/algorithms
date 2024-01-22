// Create a function that takes an array of numbers and returns the second largest number.

function secondLargest(arr) {
  let max = -Infinity;
  let secondlarge = -Infinity;

  for (let i = 0; i < arr.length; ++i) {
    if (max < arr[i]) {
      secondlarge = max;
      max = arr[i];
    } else if (arr[i] > secondlarge && arr[i] < max) {
      secondlarge = arr[i];
    }
  }
  return secondlarge;
}

console.log(secondLargest([10, 40, 30, 20, 50])); // ➞ 40
console.log(secondLargest([25, 143, 89, 13, 105])); // ➞ 105
console.log(secondLargest([54, 23, 11, 17, 10])); // ➞ 23
