function upperBound(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let maxPosition = -1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (target >= arr[mid]) {
      maxPosition = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return maxPosition;
}

const arr = [1, 1, 2, 5, 5, 5, 6, 6, 7];
console.log(upperBound(arr, 5));