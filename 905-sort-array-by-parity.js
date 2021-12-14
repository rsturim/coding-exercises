/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let l = 0;
  let r = 0;

  while (r < nums.length) {
    const item = nums[r];

    if (item % 2 !== 0) {
      r++;
    } else {
      [nums[l], nums[r]] = [nums[r], nums[l]];
      l++;
      r++;
    }
  }

  return nums;
};

const nums = [3, 1, 2, 4];
// Output: [2,4,3,1]

// const nums = [0]
// Output: [0]

const result = sortArrayByParity(nums);
console.log('result: ', result);
