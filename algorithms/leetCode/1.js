function twoSum(arr, target) {
  let length = arr.length;
  for (let i = 0; i < length; ++i) {
    for (let j = i + 1; j < length; ++j) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

function twoSum2(arr, target) {
  const hashMap = new Map();
  for (let i = 0; i < arr.length; ++i) {
    let complement = target - arr[i];
    if (hashMap.has(complement)) {
      return [hashMap.get(complement), i];
    }
    hashMap.set(arr[i], i);
  }
  return [];
}

const nums = [4, 4];
console.log(twoSum(nums, 8));
