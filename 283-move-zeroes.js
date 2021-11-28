/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
  let l = 0;
  let r = 0;

  while (r < nums.length) {
    const rNum = nums[r];

    if (rNum === 0) {
      r++;
    } else {
      [nums[l], nums[r]] = [nums[r], nums[l]];
      l++;
      r++;
    }
  }
  return nums
};

const nums = [0, 1, 0, 3, 12];
// Output: [1,3,12,0,0]

// const nums = [0];
// Output: [0]

const result = moveZeroes(nums);
console.log('result: ', result);
