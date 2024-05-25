function countTrue(arr) {
  let count = 0;

  arr.forEach((element, index) => {
    if (arr[index] === true) {
      count++;
    }
  });
  
  return count;
}

console.log(countTrue([true, false, false, true, false])); // ➞ 2
console.log(countTrue([false, false, false, false])); // ➞ 0
console.log(countTrue([])); // ➞ 0