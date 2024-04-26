const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) {
      return arr[mid];
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

function getCommon(arr1, arr2) {
  for (let i = 0; i < arr1.length; ++i) {
    let findedItem = binarySearch(arr2, arr1[i]);
    if (findedItem !== -1 && findedItem) {
      return findedItem;
    }
  }
  return -1;
}

function getCommon2(arr1, arr2) {
  const hashMap = new Map();
  for (let i = 0; i < arr1.length; ++i) {
    hashMap.set(arr1[i], i);
  }
  for (let i = 0; i < arr2.length; ++i) {
    if (hashMap.has(arr2[i])) {
      return arr2[i];
    }
  }
  return -1;
}

const arr1 = [0, 1, 2, 3, 4];
const arr2 = [2, 4, 5];
console.log(getCommon(arr1, arr2));
