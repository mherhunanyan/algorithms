
function customMap(arr, callbackFn) {
  const newArr = [];
  for (let i = 0; i < arr.length; ++i) {
    newArr[i] = callbackFn(arr[i], i, arr);
  }
  return newArr;
}

const numbers = [1, 2, 3];
const doubled = customMap(numbers, num => num * 2);
console.log(doubled); // Output: [2, 4, 6]