function searchMatrix(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let midC = 0;
  while (left <= right) {
    midC = left + Math.floor((right - left) / 2);
    let nLeft = 0;
    let nRight = arr[midC].length - 1;

    if (arr[midC][nLeft] > target) {
      right = midC - 1;
    } else if (arr[midC][nRight] < target) {
      left = midC + 1;
    } else {
      break;
    }
  }
  let nLeft = 0;
  let nRight = arr[midC].length - 1;
  while (nLeft <= nRight) {
    let midR = nLeft + Math.floor((nRight - nLeft) / 2);
    if (arr[midC][midR] === target) {
      return true;
    } else if (arr[midC][midR] < target) {
      nLeft = midR + 1;
    } else {
      nRight = midR - 1;
    }
  }
  return false;
}

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
console.log(searchMatrix(matrix, 3));
