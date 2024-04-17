function singleNumber(nums) {
  if (nums.length === 1) {
    return nums;
  }
  let singleNumber = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    singleNumber = singleNumber ^ nums[i];
  }
  return singleNumber;
}
const nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));
