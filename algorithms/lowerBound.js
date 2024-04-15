function lowerBound(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let minPosition = -1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (target <= arr[mid]) {
      minPosition = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return minPosition;
}

const arr = [1, 1, 2, 5, 5, 5, 6, 6, 7];
console.log(lowerBound(arr, 7));
