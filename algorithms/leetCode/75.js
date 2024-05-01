function sortColors(arr) {
  for (let i = 0; i < arr.length; ++i) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && key < arr[j]) {
      arr[j + 1] = arr[j]
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

function sortColors2(arr) {
  let left = 0;
  let right = arr.length - 1;
  let mid = 0;
  while (mid <= right) {
    if (arr[mid] === 0) {
      swap(arr, mid, left);
      left++;
      mid++;
    } else if (arr[mid] === 2) {
      swap(arr, mid, right);
      right--;
    } else {
      mid++;
    }
  }
  return arr;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr = [2,0,2,1,1,0];
console.log(sortColors2(arr));