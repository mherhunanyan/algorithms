// Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.

function keysAndValues(obj) {
  const arrKeys = Object.getOwnPropertyNames(obj).sort();

  const arrValues = [];
  Object.getOwnPropertyNames(obj).forEach((val, ind, array) => {
    arrValues.push(obj[val]);
  });

  const keyAndValues = [];
  keyAndValues.push(arrKeys);
  keyAndValues.push(arrValues);

  return keyAndValues;
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 })); // ➞ [["a", "b", "c"], [1, 2, 3]]
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })); // ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
console.log(keysAndValues({ key1: true, key2: false, key3: undefined })); // ➞ [["key1", "key2", "key3"], [true, false, undefined]]
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
