
function combineUnique(arr1, arr2) {

  return [...new Set([...arr1, ...arr2])];
}

const array1 = [1, 2, 3];
const array2 = [2, 3, 4];
console.log(combineUnique(array1, array2)); // Output: [1, 2, 3, 4]