function search(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] >= arr[left]) {
      if (arr[left] <= target && arr[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target > arr[mid] && arr[right] <= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}

const arr = [4, 5, 6, 7, 0, 1, 2];
console.log(search(arr, 2));
