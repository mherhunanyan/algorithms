function recurringNumber(arr) {
  const totalItem = arr.length - 1;
  const map = {};
  for (let i = 0; i < totalItem; ++i) {
    if (map[arr[i]] !== undefined) {
      return arr[i];
    }
    map[arr[i]] = i;
  }
}

const arr = [2, 1, 3, 5, 1, 2, 4];
console.log(recurringNumber(arr));
