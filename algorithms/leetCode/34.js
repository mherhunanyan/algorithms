function searchRange(arr, target) {
  const firstPosition = () => {
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

  const lastPosition = () => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if (arr[mid] <= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left - 1;
  };

  let first = firstPosition();
  let last = lastPosition();
  if (first < arr.length && arr[last] === target) {
    return [first, last];
  }

  return [-1, -1];
}

const arr = [5, 7, 7, 8, 8, 10];
console.log(searchRange(arr, 8));
