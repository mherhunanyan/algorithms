
const removeDuplicates = (arr) => {
    let k = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (k < 2 || arr[i] !== arr[k - 2]) {
            arr[k] = arr[i];
            k++;
        }
    }
}

const nums = [0,0,1,1,1,1,2,3,3];
console.log(removeDuplicates(nums));