/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
  let anchor = 0;

  for (let explorer = 0; explorer < nums.length; explorer++) {
    if (nums[explorer] !== 0) {
      [nums[explorer], nums[anchor]] = [nums[anchor], nums[explorer]];
      anchor++;
    }
  }

  return nums;
};

const nums = [0, 1, 0, 3, 12];
// // Output: [1,3,12,0,0]

// const nums = [0];
// Output: [0]

const result = moveZeroes(nums);
console.log('result: ', result);
