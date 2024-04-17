function twoSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] === target) {
      return [left + 1, right + 1];
    }
    if (target > arr[left] + arr[right]) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}

const nums = [2, 7, 11, 15];
console.log(twoSum(nums, 9));
