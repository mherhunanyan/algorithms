
function arrayIntersection(arr1, arr2) {
  const res = [];

  for (let item of arr1) {
    if (arr2.includes(item)) {
      res.push(item);
    }
  }

  return res;
}

const nums1 = [1, 2, 3, 4, 99];
const nums2 = [3, 4, 5, 6, 99];
console.log(arrayIntersection(nums1, nums2)); // Output: [3, 4]