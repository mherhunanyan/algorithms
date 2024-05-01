function maxSubArray(arr) {
  if (arr.length === 0) return 0;

  const firstItem = arr[0];
  let currentSum = firstItem;
  let globalSum = firstItem;

  for (let i = 1; i < arr.length; ++i) {
    const currentItem = arr[i];
    if (currentItem > currentSum + currentItem) {
      currentSum = currentItem;
    } else {
      currentSum += currentItem;
    }

    if (currentSum > globalSum) {
      globalSum = currentSum;
    }
  }

  return globalSum;
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(arr)); // 6
