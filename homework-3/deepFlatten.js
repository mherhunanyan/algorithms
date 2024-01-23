
function deepFlatten(arr) {
  let flattened = [];

  for (let i = 0; i < arr.length; ++i) {
    if (Array.isArray(arr[i])) {
      flattened = flattened.concat(deepFlatten(arr[i]));
    } else {
      flattened.push(arr[i]);
    }
  }
  
  return flattened;
}



const nestedArray = [1, [2, [3, [4]], 5]];
console.log(deepFlatten(nestedArray)); // Output: [1, 2, 3, 4, 5]