import {BinarySearch} from '../searching-algorithms/BinarySearchIterativ.js';

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; ++i) {
    const findElem = BinarySearch(arr, target - arr[i]);
    if (findElem !== -1) {
      return [i + 1, findElem + 1];
    }
  }
  return [];
}

const nums = [2,7,11,15];
console.log(twoSum(nums, 9));
