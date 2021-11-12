/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  const len = nums.length;
  const result = new Array(len).fill(1);
  let leftProduct = 1;
  for (let i = 1; i < len; i++) {
    const endIndex = len - 1 - i;
    const rightIndex = endIndex + 1;
    const rightVal = result[rightIndex];
    const inputVal = nums[rightIndex];

    result[endIndex] = rightVal * inputVal;
    const item = nums[i];
  }

  for (let i = 0; i < len; i++) {
    const item = nums;
    const productExceptSelf = leftProduct * result[i];
    result[i] = productExceptSelf;
    leftProduct = leftProduct * nums[i];
  }

  return result;
};

let nums = [1, 2, 3, 4];
// let nums = [-1, 1, 0, -3, 3];
const result = productExceptSelf(nums);

console.log('result: ', result);
