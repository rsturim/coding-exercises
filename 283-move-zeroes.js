/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
  let anchor = 0;
  let explorer = 1;

  while (explorer < nums.length) {
    if (nums[anchor] !== nums[explorer]) {
      nums[anchor + 1] = nums[explorer];
      anchor++;
    }
    explorer++;
  }

  console.log('nums: ', nums);
  return anchor + 1;
};

const nums = [0, 1, 0, 3, 12];
// Output: [1,3,12,0,0]

// const nums = [0];
// Output: [0]

const result = moveZeroes(nums);
console.log('result: ', result);
