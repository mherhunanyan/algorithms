export function BubbleSort(arr) {
  let totalArr = arr.length;
  for (let i = 0; i < totalArr - 1; ++i) {
    let swaped = false;
    for (let j = 0; j < totalArr - i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        swaped = true;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (!swaped) {
      break;
    }
  }
  return arr;
}

const arr = [5, 5, 4, 3, 2, 1];
