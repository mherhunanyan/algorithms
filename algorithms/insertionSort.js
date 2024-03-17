function insertionSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  for (let i = 1; i < arr.length; ++i) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      arr[j] = key;
      --j;
    }
  }

  return arr;
}

console.log(insertionSort([8, 7, 3, 2, 5])); // [ 2, 3, 5, 7, 8 ]
console.log(insertionSort([4, 0, 0, 0, 0, 0, 0, 0, 10])); // [ 0, 0, 0, 0, 0, 0, 0, 4, 10]
console.log(insertionSort([1])); // [ 1 ]
console.log(insertionSort([-1, -4, -8, 4, 7, 20])); // [ -8, -4, -1, 4, 7, 20 ]
