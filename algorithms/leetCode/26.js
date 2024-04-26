function removeDuplicates(arr) {
  let i = 1;
  let j = 1;
  while (j < arr.length) {
    if (arr[i - 1] === arr[j]) {
      delete arr[j];
      j++;
    } else {
      arr[i] = arr[j];
      i++;
    }
  }

  return i;
}

const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(arr), arr);
