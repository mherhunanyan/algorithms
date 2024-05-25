function mergeSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) {
    return;
  }
  let mid = left + Math.floor((right - left) / 2);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
  return arr;
}

function merge(arr, left, mid, right) {
  let s1 = left;
  let e1 = mid;
  let s2 = mid + 1;
  let e2 = right;
  let tmp = [];
  while (s1 <= e1 && s2 <= e2) {
    if (arr[s1] < arr[s2]) {
      tmp.push(arr[s1]);
      s1++;
    } else {
      tmp.push(arr[s2]);
      s2++;
    }
  }
  while (s1 <= e1) {
    tmp.push(arr[s1]);
    s1++;
  }
  while (s2 <= e2) {
    tmp.push(arr[s2]);
    s2++;
  }

  for (let i = 0; i < tmp.length; ++i) {
    arr[left + i] = tmp[i];
  }

  return arr;
}

console.log(mergeSort([8,7,6,5,4,3,2,1]));