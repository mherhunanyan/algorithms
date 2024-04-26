const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

function searchInsert(arr, target) {
  return binarySearch(arr, target);
}

const arr = [1, 2, 4, 8];
console.log(searchInsert(arr, 9));
