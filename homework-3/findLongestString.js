
function findLongestString(arr) {
  if (arr.length !== 0) {
    let maxLength = arr[0].length;
    let maxLengthItem = arr[0];
    for (let i = 0; i < arr.length; ++i) {
      if (typeof arr[i] === "string") {
        let itemLength = arr[i].length;
        if (maxLength < itemLength) {
          maxLength = itemLength;
          maxLengthItem = arr[i];
        }
      }
    }
    return maxLengthItem;
  }
  return null;
}

const strings = ["short", "medium length", "longest string"];
console.log(findLongestString(strings)); // Output: "longest string"
