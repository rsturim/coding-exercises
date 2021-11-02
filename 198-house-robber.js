/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums === null || nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  let runningTotal = [];
  runningTotal[0] = nums[0];
  runningTotal[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    const prevHouse = runningTotal[i - 1];
    const twoHousesAgo = runningTotal[i - 2];
    const thisHouse = nums[i];
    runningTotal[i] = Math.max(prevHouse, thisHouse + twoHousesAgo);
  }

  // return the final number in the running total
  return runningTotal[runningTotal.length - 1];
};

// const nums = [1, 2, 3, 1];
// Output: 4

// const nums = [2, 7, 9, 3, 1];
// Output: 12

const nums = [2, 1, 1, 2];
// Output 4

const result = rob(nums);
console.log('result: ', result);
