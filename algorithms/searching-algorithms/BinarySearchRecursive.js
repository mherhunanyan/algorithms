function BinarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }
  if (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (target === arr[mid]) {
      return mid;
    }
    if (target < arr[mid]) {
      return BinarySearch(arr, target, left, (right = mid - 1));
    } else {
      return BinarySearch(arr, target, (left = mid + 1), right);
    }
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7];
