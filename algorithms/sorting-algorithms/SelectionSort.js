export function SelectionSort(arr) {
  let totalArr = arr.length;
  for (let i = 0; i < totalArr - 1; ++i) {
    let min = arr[i];
    let indexMin = i;
    for (let j = i + 1; j < totalArr; ++j) {
      if (min > arr[j]) {
        min = arr[j];
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
    }
  }
  return arr;
}

let arr = [34, 7, 23, 32, 5, 62];
