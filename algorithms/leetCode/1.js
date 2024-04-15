function twoSum(arr, target) {
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

const nums = [2, 7, 11, 15];
console.log(twoSum(nums, 9)); // [0, 1]
