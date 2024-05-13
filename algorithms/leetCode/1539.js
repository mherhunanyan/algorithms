function findKthPositive(arr, k) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        let missingNum = arr[mid] - (mid + 1);

        if (missingNum < k) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left + k;
}


const nums = [2,3,4,7,11];
console.log(findKthPositive(nums, 5));