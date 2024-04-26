function findMiddleIndex(arr) {
  let totalItem = arr.length;
  let sumTotalItem = 0;
  for (let i = 0; i < totalItem; ++i) {
    sumTotalItem += arr[i];
  }

  let leftSum = 0;
  for (let i = 0; i < totalItem; ++i) {
    let rightSum = sumTotalItem - leftSum - arr[i];

    if (leftSum === rightSum) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1;
}

const arr = [1,-1,4];
console.log(findMiddleIndex(arr));
